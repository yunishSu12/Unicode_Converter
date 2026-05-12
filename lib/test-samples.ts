/**
 * Test samples for Unicode to Preeti conversion
 * Use these to verify conversion accuracy
 */

export const testSamples = {
  // Basic vowels
  basic: {
    unicode: 'अआइईउऊऋएऐओऔ',
    expectedPreeti: 'ccfOO{kpmCP]cf]cf}',
  },
  
  // Simple consonants
  consonants: {
    unicode: 'कखगघङचछजझञ',
    expectedPreeti: 'svug3rRh´¥',
  },
  
  // Common words
  namaste: {
    unicode: 'नमस्ते',
    expectedPreeti: 'gd:t]',
  },
  
  swagat: {
    unicode: 'स्वागत छ',
    expectedPreeti: ':jfut 5',
  },
  
  // Conjuncts
  conjuncts: {
    unicode: 'क्ष त्र ज्ञ श्र',
    expectedPreeti: 'If q 1 >',
  },
  
  // Complex sentence
  sentence: {
    unicode: 'यो युनिकोड नेपाली हो।',
    expectedPreeti: 'of] o\'lgskf]8 g]kfnL xf] .',
  },
  
  // With matras
  matras: {
    unicode: 'काकिकीकुकूकेकैकोकौ',
    expectedPreeti: 'sflslsLsˆs\"s]s}sf]sf}',
  },
  
  // Numbers
  numbers: {
    unicode: '०१२३४५६७८९',
    expectedPreeti: ')!@#$%^&*(',
  },
  
  // Mixed content
  mixed: {
    unicode: 'नेपाल Nepal २०२४',
    expectedPreeti: 'g]kfn Nepal @)@$'
  },
  
  // Complex conjuncts
  complexConjuncts: {
    unicode: 'प्रकृति विद्यालय सम्मान',
    expectedPreeti: 'k|s[lt ljBfno ;Ddflg',
  },
  
  // Government document style
  government: {
    unicode: 'नेपाल सरकार शिक्षा मन्त्रालय',
    expectedPreeti: 'g]kfn ;/sf/ lzIff dGqfno',
  },
  
  // Legal text
  legal: {
    unicode: 'संविधान अनुसार न्यायालय',
    expectedPreeti: '+ljwfg cg\';f/ Gofofno',
  },
};

/**
 * Run basic tests on conversion functions
 */
export function runBasicTests(
  unicodeToPreeti: (text: string) => string,
  preetiToUnicode: (text: string) => string
): { passed: number; failed: number; results: Array<{ name: string; passed: boolean; details: string }> } {
  const results: Array<{ name: string; passed: boolean; details: string }> = [];
  let passed = 0;
  let failed = 0;
  
  Object.entries(testSamples).forEach(([name, sample]) => {
    const converted = unicodeToPreeti(sample.unicode);
    const isPassed = converted === sample.expectedPreeti;
    
    if (isPassed) {
      passed++;
    } else {
      failed++;
    }
    
    results.push({
      name,
      passed: isPassed,
      details: `Input: ${sample.unicode}\nExpected: ${sample.expectedPreeti}\nGot: ${converted}`,
    });
  });
  
  return { passed, failed, results };
}

/**
 * Sample texts for manual testing
 */
export const manualTestTexts = {
  short: 'नमस्ते, तपाईंलाई कस्तो छ?',
  medium: 'नेपाल दक्षिण एशियामा अवस्थित एक स्वतन्त्र राष्ट्र हो। यसको राजधानी काठमाडौं हो।',
  long: `नेपाल संघीय लोकतान्त्रिक गणतन्त्र नेपाल दक्षिण एशियामा रहेको एक भूपरिवेष्ठित राष्ट्र हो। 
यसको उत्तरमा चीन र दक्षिण, पूर्व र पश्चिममा भारत अवस्थित छ। 
नेपालको कुल क्षेत्रफल १,४७,१८१ वर्ग किलोमिटर छ र जनसंख्या करिब ३ करोड छ।`,
  
  withNumbers: 'नेपालको स्थापना सन् २०१५ मा भएको थियो। यहाँ ८ वटा प्रदेश छन्।',
  
  withPunctuation: 'के तपाईं नेपाली बोल्नुहुन्छ? हो, म नेपाली बोल्छु।',
  
  government: `नेपाल सरकार
शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय
सिंहदरबार, काठमाडौं
मिति: २०८१/०१/०१`,
  
  legal: `नेपालको संविधान
भाग १ - प्रारम्भिक
धारा १ - नेपाल
नेपाल स्वतन्त्र, अविभाज्य, सार्वभौम, धर्मनिरपेक्ष, समावेशी, लोकतान्त्रिक, समाजवाद उन्मुख संघीय लोकतान्त्रिक गणतन्त्र राज्य हो।`,
};
