/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let cache = []
  
  return nums.map((eachNumber, index) => {
    if (index == 0) {
      cache[index] = eachNumber
      return eachNumber
    }
    else {
      cache[index] = cache[index - 1] + eachNumber
      return cache[index]
    }
  });
};

if (module.exports) {
  module.exports = runningSum
}
