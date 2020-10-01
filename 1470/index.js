/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i*2] = nums[i];
    result[i*2+1] = nums[n+i];
  }

  return result;
};