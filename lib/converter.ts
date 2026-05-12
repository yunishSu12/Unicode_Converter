import { unicodeToPreetiMap, preetiToUnicodeMap, preetiVariations } from './mapping';
import { getAllMappings } from './enhanced-mappings';

export function unicodeToPreeti(text: string): string {
  if (!text) return '';
  let processedText = text.normalize('NFC');

  // STEP 1: PRE-PROCESS REORDERING (i-matra and reph)
  // Move 'i' matra (ि) before the consonant cluster
  processedText = processedText.replace(/([\u0915-\u0939](?:\u094D[\u0915-\u0939])*)\u093F/g, '\u093F$1');
  // Handle Reph (र्)
  processedText = processedText.replace(/\u0930\u094D([\u0915-\u0939](?:\u094D[\u0915-\u0939])*)/g, '$1{');

  const allMappings = { ...getAllMappings(), ...unicodeToPreetiMap };
  let result = '';
  let i = 0;
  
  // STEP 2: GREEDY MATCH LOOP
  while (i < processedText.length) {
    let matched = false;
    
    // Check longest sequences first (up to 4 chars for clusters like क्ष्य)
    for (let len = Math.min(4, processedText.length - i); len >= 1; len--) {
      const substr = processedText.substring(i, i + len);
      if (allMappings[substr] !== undefined) {
        result += allMappings[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      const char = processedText[i];
      // Skip standalone halant if it wasn't caught in a conjunct
      if (char.charCodeAt(0) !== 0x094D) {
        result += char;
      }
      i++;
    }
  }
  return result;
}

export function preetiToUnicode(text: string): string {
  if (!text) return '';
  
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Try to match longer sequences first (up to 4 characters)
    for (let len = Math.min(4, text.length - i); len >= 1; len--) {
      const substr = text.substring(i, i + len);
      
      // Check main reverse mapping
      if (preetiToUnicodeMap[substr]) {
        result += preetiToUnicodeMap[substr];
        i += len;
        matched = true;
        break;
      }
      
      // Check variations
      if (preetiVariations[substr]) {
        result += preetiVariations[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    // If no match found, keep the character as-is
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  // Apply post-processing for Preeti to Unicode
  // Reorder i-matra back to Unicode position
  // In Preeti: l + consonant
  // In Unicode: consonant + ि
  const unicodeConsonants = '[\u0915-\u0939]';
  const regex = new RegExp(`\u093F(${unicodeConsonants}+)`, 'g');
  result = result.replace(regex, '$1\u093F');
  
  // Normalize to NFC
  if (typeof result.normalize === 'function') {
    result = result.normalize('NFC');
  }
  
  return result;
}

export function detectTextType(text: string): 'unicode' | 'preeti' | 'unknown' {
  if (/[\u0900-\u097F]/.test(text)) return 'unicode';
  if (/[cfOpmP]/.test(text) && /[stybwga]/.test(text)) return 'preeti';
  return 'unknown';
}

export function unicodeToPreetiAdvanced(text: string): string {
  if (!text) return '';
  const segments: Array<{ text: string; isNepali: boolean }> = [];
  let currentSegment = '';
  let isCurrentNepali = false;
  
  for (let i = 0; i < text.length; i++) {
    const isNepali = /[\u0900-\u097F]/.test(text[i]);
    if (i === 0) { isCurrentNepali = isNepali; currentSegment = text[i]; }
    else if (isNepali === isCurrentNepali) currentSegment += text[i];
    else {
      segments.push({ text: currentSegment, isNepali: isCurrentNepali });
      currentSegment = text[i];
      isCurrentNepali = isNepali;
    }
  }
  segments.push({ text: currentSegment, isNepali: isCurrentNepali });
  return segments.map(s => s.isNepali ? unicodeToPreeti(s.text) : s.text).join('');
}