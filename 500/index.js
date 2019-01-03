/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  var row1Regex = /[qwertyuiop]+/ig;
  var row2Regex = /[asdfghjkl]+/ig;
  var row3Regex = /[zxcvbnm]+/ig;
  return words.filter((word) => {
    if (compare(word, row1Regex) || compare(word, row2Regex) || compare(word, row3Regex)) {
      return true;
    }
    return false;
  });
};

var compare = function(word, regex) {
  let match = word.match(regex);
  if (match && match[0].length === word.length) {
    return true;
  } 
  return false;
}

if (module) {
  module.exports = findWords;
}
