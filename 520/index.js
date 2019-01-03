/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  var patternA = /^[A-Z]+$/;
  var patternB = /^[a-z]+$/;
  var patternC = /^[A-Z][a-z]+$/;
  return !!(word.match(patternB) || word.match(patternA) || word.match(patternC));
};

if (module) {
  module.exports = detectCapitalUse;
}
