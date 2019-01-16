/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  var map = {};
  A.forEach(function(eachNumber) {
    if (!map[eachNumber]) {
      map[eachNumber] = 0;
    }
    map[eachNumber] ++;
  });
  
  for (var key in map) {
    if (map[key] === (A.length / 2)) {
      return key
    }
  }
};

if (module.exports) {
  module.exports = repeatedNTimes;
}
