// Quick test script for the converter
const { unicodeToPreeti } = require('./lib/converter.ts');

const testCases = [
  'नमस्ते',
  'नेपाल सरकार',
  'शिक्षा मन्त्रालय',
  'सिंहदरबार, काठमाडौं',
  'मिति: २०८१/०१/०१',
];

console.log('Testing Unicode to Preeti Conversion:\n');

testCases.forEach(test => {
  const result = unicodeToPreeti(test);
  console.log(`Input:  ${test}`);
  console.log(`Output: ${result}`);
  console.log('---');
});
