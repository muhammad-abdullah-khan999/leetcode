/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
   if (words.length !== pattern.length) return false;

   const charToWord = new Map();
   const wordToChar = new Map();

   for (let i = 0; i < pattern.length; i++) {
       const ch = pattern[i];
       const word = words[i];

       if (!charToWord.has(ch)) {
           if (wordToChar.has(word)) return false;
           charToWord.set(ch, word);
           wordToChar.set(word, ch);
       } else {
           if (charToWord.get(ch) !== word) return false;
       }
   }
   return true;
};