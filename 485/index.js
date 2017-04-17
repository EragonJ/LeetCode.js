/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var lastMax = 0;
  var thisMax = 0;
  
  nums.forEach((num) => {
    if (num === 1) {
      thisMax += 1;
    }
    else {
      lastMax = Math.max(lastMax, thisMax);
      thisMax = 0;
    }
  });
  lastMax = Math.max(lastMax, thisMax);
  
  return lastMax;
};

module.exports = findMaxConsecutiveOnes;
