// enhanced-mappings.ts
export const extendedConjuncts: Record<string, string> = {
  // --- Individual Half-Consonants (Consonant + Halant) ---
  // This solves 'हुन्छ' (न् -> G) and any other conjuncts systemically
  '\u0915\u094D': 'S', '\u0916\u094D': 'V', '\u0917\u094D': 'U', '\u0918\u094D': '3',
  '\u091A\u094D': 'R', '\u091C\u094D': 'H', '\u0924\u094D': 'T', '\u0925\u094D': 'Y',
  '\u0927\u094D': 'W', '\u0928\u094D': 'G', '\u092A\u094D': 'K', '\u092B\u094D': 'km',
  '\u092C\u094D': 'A', '\u092D\u094D': 'E', '\u092E\u094D': 'D', '\u0932\u094D': 'N',
  '\u0935\u094D': 'J', '\u0936\u094D': 'Z', '\u0937\u094D': 'If', '\u0938\u094D': ':',
  '\u0939\u094D': 'X',

  // --- Universal Joint Rules ---
  '\u094D\u092F': 'o', // Joint-Ya (्य) -> Fixes लक्ष्य (If + o)
  '\u094D\u0930': '|', // Rakar (्र)

  // --- Complex Conjuncts ---
  '\u0915\u094D\u0937': 'If', // क्ष
'\u0915\u094D\u0937\u094D\u092F': 'Ifo', // क्ष्य
'\u0915\u094D\u0937\u094D\u0930': 'If|', // क्ष्र (rakar)
  '\u0924\u094D\u0930': 'q',  // त्र
  '\u091C\u094D\u091E': '1',  // ज्ञ
  '\u0936\u094D\u0930': '>',  // श्र
  '\u0928\u094D\u0924\u094D\u0930': 'Gq', // न्त्र
  '\u0938\u094D\u0924\u094D\u0930': ':q', // स्त्र
};

export function getAllMappings(): Record<string, string> {
  return extendedConjuncts;
}