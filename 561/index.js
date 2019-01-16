/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  // [1, 4, 3, 5, 8, 9]
  // [1, 3, 4, 5, 8, 9]
  // [1,3], [4,5], [8,9] = 13
  nums.sort(function(a, b) {
    return a - b;
  });
  
  var sum = 0;
  for (var i = 0; i < nums.length; i+=2) {
    sum += nums[i];
  }
  
  return sum;
};

if (module.exports) {
  module.exports = arrayPairSum;
}
