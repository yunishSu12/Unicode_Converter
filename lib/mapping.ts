// mapping.ts
export const unicodeToPreetiMap: Record<string, string> = {
  // Vowels
  '\u0905': 'c', '\u0906': 'cf', '\u0907': 'O', '\u0908': 'O{',
  '\u0909': 'p', '\u090A': 'pm', '\u090B': 'C', '\u090F': 'P',
  '\u0910': 'P]', '\u0913': 'cf]', '\u0914': 'cf}',
  
  // Consonants (Full letters)
  '\u0915': 's', '\u0916': 'v', '\u0917': 'u', '\u0918': '3', '\u0919': 'ª',
  '\u091A': 'r', '\u091B': '5', '\u091C': 'h', '\u091D': '´', '\u091E': '`',
  '\u091F': '6', '\u0920': '7', '\u0921': '8', '\u0922': '9', '\u0923': '0',
  '\u0924': 't', '\u0925': 'y', '\u0926': 'b', '\u0927': 'w', '\u0928': 'g',
  '\u092A': 'k', '\u092B': 'km', '\u092C': 'a', '\u092D': 'e', '\u092E': 'd',
  '\u092F': 'o', '\u0930': '/', '\u0932': 'n', '\u0935': 'j', '\u0936': 'z',
  '\u0937': 'i', '\u0938': ';', '\u0939': 'x',

  // Matras
  '\u093E': 'f', '\u093F': 'l', '\u0940': 'L', '\u0941': "'", '\u0942': '"',
  '\u0943': '[', '\u0947': ']', '\u0948': '}', '\u094B': 'f]', '\u094C': 'f}',

  // Marks
  '\u0902': '+', '\u0901': 'F', '\u0903': 'M',
  '\u094D': '', // Halant (Handled by greedy matching in enhanced-mappings)

  // Numbers
  '\u0966': ')', '\u0967': '!', '\u0968': '@', '\u0969': '#', '\u096A': '$',
  '\u096B': '%', '\u096C': '^', '\u096D': '&', '\u096E': '*', '\u096F': '(',
  '\u0964': '.', '\u0965': '..'
};

export const preetiToUnicodeMap: Record<string, string> = {};
Object.entries(unicodeToPreetiMap).forEach(([u, p]) => { if (p) preetiToUnicodeMap[p] = u; });
export const preetiVariations: Record<string, string> = {};