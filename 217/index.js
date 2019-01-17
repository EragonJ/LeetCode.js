/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var map = {};

  for(var i = 0; i < nums.length; i++) {
    var eachNumber = nums[i];
    if (!map[eachNumber]) {
      map[eachNumber] = 0;
    }
    map[eachNumber]++;
    if (map[eachNumber] > 1) {
      return true;
    }    
  }
  
  return false;
};

if (module.exports) {
  module.exports = containsDuplicate;
}
