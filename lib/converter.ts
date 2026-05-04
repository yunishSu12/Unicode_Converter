import { unicodeToPreetiMap, preetiToUnicodeMap, preetiVariations } from './mapping';
import { getAllMappings } from './enhanced-mappings';

/**
 * Convert Unicode Nepali text to Preeti font encoding
 * Based on proven implementations from Shuvayatra/preeti and lekhnus.com
 */
export function unicodeToPreeti(text: string): string {
  if (!text) return '';
  
  // Normalize to NFC
  if (typeof text.normalize === 'function') {
    text = text.normalize('NFC');
  }
  
  // Get all mappings
  const allMappings = { ...getAllMappings(), ...unicodeToPreetiMap };
  
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    // Try to match longer sequences first
    for (let len = Math.min(8, text.length - i); len >= 1; len--) {
      const substr = text.substring(i, i + len);
      
      if (allMappings[substr]) {
        result += allMappings[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      const char = text[i];
      const charCode = char.charCodeAt(0);
      
      // Skip standalone halant
      if (charCode === 0x094D) {
        i++;
        continue;
      }
      
      result += char;
      i++;
    }
  }
  
  // Apply post-processing rules (critical for correct output)
  result = applyPostRules(result);
  
  return result;
}

/**
 * Apply post-processing rules to handle special cases
 * Based on the Shuvayatra/preeti implementation
 */
function applyPostRules(text: string): string {
  // Rule 1: Reorder i-matra (ि / U+093F)
  // In Unicode: consonant + ि
  // In Preeti: l + consonant
  // Pattern: Move ि before the consonant cluster
  text = text.replace(/([^\u093F])(\u093F)/g, '$2$1');
  
  // Rule 2: Handle reph (र् + consonant)
  // In some cases, { represents र् that should come before
  text = text.replace(/([^\{])(\{)/g, '$2$1');
  
  // Rule 3: Reorder anusvara and chandrabindu to come after matras
  // ं (U+0902) and ँ (U+0901) should come after vowel signs
  text = text.replace(/([\u0902\u0901])([\u093E\u093F\u0940\u0941\u0942\u0943\u0947\u0948\u094B\u094C\u0903]*)/g, '$2$1');
  
  return text;
}

/**
 * Convert Preeti font encoding to Unicode Nepali
 */
export function preetiToUnicode(text: string): string {
  if (!text) return '';
  
  let result = '';
  let i = 0;
  
  while (i < text.length) {
    let matched = false;
    
    for (let len = Math.min(4, text.length - i); len >= 1; len--) {
      const substr = text.substring(i, i + len);
      
      if (preetiToUnicodeMap[substr]) {
        result += preetiToUnicodeMap[substr];
        i += len;
        matched = true;
        break;
      }
      
      if (preetiVariations[substr]) {
        result += preetiVariations[substr];
        i += len;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      result += text[i];
      i++;
    }
  }
  
  // Apply post-processing for Preeti to Unicode
  result = applyPreetiToUnicodePostRules(result);
  
  // Normalize to NFC
  if (typeof result.normalize === 'function') {
    result = result.normalize('NFC');
  }
  
  return result;
}

/**
 * Apply post-processing rules for Preeti to Unicode conversion
 */
function applyPreetiToUnicodePostRules(text: string): string {
  // Reorder i-matra back to Unicode position
  // In Preeti: l + consonant
  // In Unicode: consonant + ि
  const unicodeConsonants = '[\u0915-\u0939]';
  const regex = new RegExp(`\u093F(${unicodeConsonants}+)`, 'g');
  text = text.replace(regex, '$1\u093F');
  
  return text;
}

/**
 * Detect if text is likely Unicode Nepali or Preeti
 */
export function detectTextType(text: string): 'unicode' | 'preeti' | 'unknown' {
  const unicodeNepaliRange = /[\u0900-\u097F]/;
  const preetiChars = /[cfOpmPRh´¥67890tfybwgkaedjnzif;x]/;
  
  if (unicodeNepaliRange.test(text)) return 'unicode';
  if (preetiChars.test(text)) return 'preeti';
  return 'unknown';
}

/**
 * Advanced conversion with better handling of edge cases
 */
export function unicodeToPreetiAdvanced(text: string): string {
  if (!text) return '';
  
  if (typeof text.normalize === 'function') {
    text = text.normalize('NFC');
  }
  
  const segments: Array<{ text: string; isNepali: boolean }> = [];
  let currentSegment = '';
  let isCurrentNepali = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const isNepali = /[\u0900-\u097F]/.test(char);
    
    if (i === 0) {
      isCurrentNepali = isNepali;
      currentSegment = char;
    } else if (isNepali === isCurrentNepali) {
      currentSegment += char;
    } else {
      segments.push({ text: currentSegment, isNepali: isCurrentNepali });
      currentSegment = char;
      isCurrentNepali = isNepali;
    }
  }
  
  if (currentSegment) {
    segments.push({ text: currentSegment, isNepali: isCurrentNepali });
  }
  
  return segments
    .map(segment => segment.isNepali ? unicodeToPreeti(segment.text) : segment.text)
    .join('');
}
