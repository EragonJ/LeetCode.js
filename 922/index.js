/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var odds = [];
  var evens = [];
  var result = [];
  
  A.forEach(function(item) {
    if (item % 2 === 0) {
      evens.push(item);
    }
    else {
      odds.push(item);
    }
  });
  
  for (var i = 0; i < A.length; i++) {
    if (i % 2 ===0) {
      result.push(evens.pop());
    }
    else {
      result.push(odds.pop());
    }
  }
  
  return result;
};

if (module.exports) {
  module.exports = sortArrayByParityII;
}
