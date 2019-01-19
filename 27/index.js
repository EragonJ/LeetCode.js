/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var len = nums.length;
  for (var i = 0, count = 0; count < len; count ++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    else {
      i++
    }
  }
  
  return nums.length;
};

if (module.exports) {
  module.exports = removeElement;
}
