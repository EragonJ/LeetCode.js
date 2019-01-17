/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var map = {};
  var targetNumber;
  
  // keep indices into map
  for (var i = 0; i < nums.length; i++) {
    targetNumber = nums[i];
    if (!map[targetNumber]) {
      map[targetNumber] = [];
    }
    map[targetNumber].push(i);
  }
  
  // check diff between indices
  var indices;
  for (var key in map) {
    indices = map[key];
    for (var i = 0; i < indices.length - 1; i++) {
      if ((indices[i + 1] - indices[i]) <= k) {
        return true;
      }
    }
  }
  
  return false;
};

if (module.exports) {
  module.exports = containsNearbyDuplicate;
}
