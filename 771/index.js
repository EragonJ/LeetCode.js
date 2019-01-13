/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var count = 0;
  var jewelsHash = {};
  var jewels = J.split('');
  
  // keep owned jewels into hash, so the search time will be O(1)
  jewels.forEach(function(jewelType) {
    jewelsHash[jewelType] = true;
  });
  
  for (var i = 0; i < S.length; i++) {
    var jewelType = S[i];
    if (jewelsHash[jewelType]) {
      count ++;
    }
  }
  
  return count;
};

if (module) {
  module.exports = numJewelsInStones;
}
