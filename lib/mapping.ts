// Unicode to Preeti character mapping
// Reverse-engineered from https://github.com/Shuvayatra/preeti

export const unicodeToPreetiMap: Record<string, string> = {
  // Vowels
  '\u0905': 'c',      // अ
  '\u0906': 'cf',     // आ
  '\u0907': 'O',      // इ
  '\u0908': 'O{',     // ई
  '\u0909': 'p',      // उ
  '\u090A': 'pm',     // ऊ
  '\u090B': 'C',      // ऋ
  '\u090F': 'P',      // ए
  '\u0910': 'P]',     // ऐ
  '\u0913': 'cf]',    // ओ
  '\u0914': 'cf}',    // औ
  
  // Consonants
  '\u0915': 's',      // क
  '\u0916': 'v',      // ख
  '\u0917': 'u',      // ग
  '\u0918': '3',      // घ
  '\u0919': '\u00AA', // ङ
  '\u091A': 'r',      // च
  '\u091B': '5',      // छ
  '\u091C': 'h',      // ज
  '\u091D': '\u00B4', // झ
  '\u091E': '`',      // ञ
  '\u091F': '6',      // ट
  '\u0920': '7',      // ठ
  '\u0921': '8',      // ड
  '\u0922': '9',      // ढ
  '\u0923': '0f',     // ण
  '\u0924': 't',      // त
  '\u0925': 'y',      // थ
  '\u0926': 'b',      // द
  '\u0927': 'w',      // ध
  '\u0928': 'g',      // न
  '\u092A': 'k',      // प
  '\u092B': 'km',     // फ
  '\u092C': 'a',      // ब
  '\u092D': 'e',      // भ
  '\u092E': 'd',      // म
  '\u092F': 'o',      // य
  '\u0930': '/',      // र
  '\u0932': 'n',      // ल
  '\u0935': 'j',      // व
  '\u0936': 'z',      // श
  '\u0937': 'if',     // ष
  '\u0938': ';',      // स
  '\u0939': 'x',      // ह
  
  // Matras (vowel signs)
  '\u093E': 'f',      // ा
  '\u093F': 'l',      // ि
  '\u0940': 'L',      // ी
  '\u0941': "'",      // ु
  '\u0942': '"',      // ू
  '\u0943': '[',      // ृ
  '\u0947': ']',      // े
  '\u0948': '}',      // ै
  '\u094B': 'f]',     // ो
  '\u094C': 'f}',     // ौ
  
  // Other marks
  '\u0902': '+',      // ं (anusvara)
  '\u0901': 'F',      // ँ (chandrabindu)
  '\u0903': 'M',      // ः (visarga)
  '\u094D': '',       // ् (halant) - handled in conjuncts
  
  // Numbers
  '\u0966': ')',      // ०
  '\u0967': '!',      // १
  '\u0968': '@',      // २
  '\u0969': '#',      // ३
  '\u096A': '$',      // ४
  '\u096B': '%',      // ५
  '\u096C': '^',      // ६
  '\u096D': '&',      // ७
  '\u096E': '*',      // ८
  '\u096F': '(',      // ९
  
  // Punctuation
  '\u0964': '.',      // ।
  '\u0965': '..',     // ॥
  
  // Common conjuncts
  '\u0915\u094D\u0937': 'If',     // क्ष
  '\u0924\u094D\u0930': 'q',      // त्र
  '\u091C\u094D\u091E': '1',      // ज्ञ
  '\u0936\u094D\u0930': '>',      // श्र
};

// Reverse mapping for Preeti to Unicode
export const preetiToUnicodeMap: Record<string, string> = {};

// Build reverse map
Object.entries(unicodeToPreetiMap).forEach(([unicode, preeti]) => {
  if (preeti && (!preetiToUnicodeMap[preeti] || unicode.length > preetiToUnicodeMap[preeti].length)) {
    preetiToUnicodeMap[preeti] = unicode;
  }
});

// Additional variations
export const preetiVariations: Record<string, string> = {};
