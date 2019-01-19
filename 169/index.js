/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = new Map();
  nums.forEach(function(num) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  });
  
  var maxKey = -Infinity;
  var maxValue = -Infinity;
  map.forEach(function(value, key, m) {
    if (value >= maxValue) {
      maxValue = value;
      maxKey = key;
    }
  });
  
  return maxKey;
};

if (module.exports) {
  module.exports = majorityElement;
}
