/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var opCount = nums.length;
  for (var i = 0; opCount > 0; opCount--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
    else {
      i++;
    }
  }  
  return nums;
};

if (module.exports) {
  module.exports = moveZeroes;
}
