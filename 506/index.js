/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  var people = [];
  nums.forEach((num, index) => {
    people[index] = {};
    people[index].score = nums[index];
    people[index].order = index;
  });
  
  people.sort((a, b) => {
    return b.score - a.score;
  });
  
  var result = [];
  people.forEach((person, index) => {
    var rank;
    if (index === 0) {
      rank = 'Gold Medal';
    }
    else if (index === 1) {
      rank = 'Silver Medal';
    }
    else if (index === 2) {
      rank = 'Bronze Medal';
    }
    else {
      rank = '' + (index + 1);
    }
    
    result[person.order] = rank;
  });
  
  return result;
};

module.exports = findRelativeRanks;
