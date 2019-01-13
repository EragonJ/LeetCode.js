/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(function(eachRow) {
    return eachRow.reverse().map(function(eachItem) {
      return (eachItem === 0) ? 1 : 0;
    });
  });
};

if (module.exports) {
  module.exports = flipAndInvertImage;
}
