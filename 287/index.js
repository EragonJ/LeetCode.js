/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var tortoise = nums[0];
  var hare = nums[0];
  
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise === hare) {
      break;
    }
  }
  
  tortoise = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  
  return tortoise;
};

if (module.exports) {
  module.exports = findDuplicate;
}
