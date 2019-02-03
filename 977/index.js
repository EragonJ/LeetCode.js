/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(function(val) {
    return val * val;
  }).sort(function(a, b) {
    return a - b;
  });
};

if (module.exports) {
  module.exports = sortedSquares;
}
