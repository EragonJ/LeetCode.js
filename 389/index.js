/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  t = t.split('');
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        t.splice(j, 1);
        break;
      }
    }
  }
  return t[0];
};

if (module) {
  module.exports = findTheDifference;
}
