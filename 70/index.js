/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var cache = [0, 1, 2];
  
  var countWays = function(n) {
    if (typeof cache[n] !== 'undefined') {
      return cache[n];
    }
    else {
      cache[n] = countWays(n-1) + countWays(n-2);
      return cache[n];
    }
  };

  return countWays(n);
};

if (module.exports) {
  module.exports = climbStairs;
}
