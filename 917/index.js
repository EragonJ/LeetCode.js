/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  var symbol = '';
  var symbolIndices = [];
  var str = '';
  
  for (var i = 0; i < S.length; i++) {
    if (isNeededLetter(S[i])) {
      str += S[i];
    }
    else {
      symbol += S[i];
      symbolIndices.push(i);
    }
  }
  
  var strAsArray = str.split('').reverse();
  
  symbolIndices.forEach(function(symbolIndex, i) {
    strAsArray.splice(symbolIndex, 0, symbol[i]);
  });
  
  return strAsArray.join('');
};
  
var isNeededLetter = function(char) {
  return (char.charCodeAt(0) <= 90 && char.charCodeAt(0) >= 65) || (char.charCodeAt(0) <= 122 && char.charCodeAt(0) >= 97);
}

if (module.exports) {
  module.exports = reverseOnlyLetters;
}
