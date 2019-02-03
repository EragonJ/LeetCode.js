/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });
  
  var i;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  
  return i;
};

if (module.exports) {
  module.exports = missingNumber;
}
