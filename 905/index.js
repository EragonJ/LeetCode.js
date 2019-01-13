/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var result = [];
  A.forEach(function(item) {
    var pos = (item % 2) === 0 ? 0 : result.length;        
    result.splice(pos, 0, item);
  });
  return result;
};

if (module.exports) {
  module.exports = sortArrayByParity;
}
