/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var cache = [];
  var result = [];
  
  nums.forEach((num) => {
    cache[num] = 1;
  });
  
  for (var i = 0; i < nums.length; i++) {
    if (!cache[i + 1]) {
      result.push(i + 1);
    }
  }
  
  return result;
};

module.exports = findDisappearedNumbers;
