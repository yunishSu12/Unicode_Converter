// Debug script to test the converter
import { unicodeToPreeti } from './lib/converter.ts';

const testWord = 'मन्त्रालय';

console.log('Testing:', testWord);
console.log('Characters:');
for (let i = 0; i < testWord.length; i++) {
  const char = testWord[i];
  const code = char.charCodeAt(0).toString(16).toUpperCase();
  console.log(`  [${i}] ${char} = U+${code}`);
}

console.log('\nNormalized (NFC):');
const normalized = testWord.normalize('NFC');
for (let i = 0; i < normalized.length; i++) {
  const char = normalized[i];
  const code = char.charCodeAt(0).toString(16).toUpperCase();
  console.log(`  [${i}] ${char} = U+${code}`);
}

console.log('\nConverted:', unicodeToPreeti(testWord));
console.log('Expected:  dGqfno');
