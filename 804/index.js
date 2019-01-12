var morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    var wordsInCode = words.map(function(word) {
        var code = '';
        for (var i = 0; i < word.length; i++) {
            code += morseCodes[word.charCodeAt(i) - 97];
        }
        return code;
    });
    
    return [... new Set(wordsInCode)].length;
};

if (module.exports) {
  module.exports = uniqueMorseRepresentations;
}
