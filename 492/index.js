/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var getPrimeFactorPairs = function(num) {
    var pairs = [];
    
    for (var i = 1; i <= Math.sqrt(num); i++) {
      if ((num%i) === 0) {
        pairs.push([num/i, i]);    
      }
    }
    
    return pairs;
  };
  
  var pairs = getPrimeFactorPairs(area);
  var found = pairs[0];
  var foundDiff = found[0] - found[1];
  pairs.forEach((pair, index) => {
    if (pair[0] - pair[1] < foundDiff) {
      found = pair;
      foundDiff = pair[0] - pair[1];
    }
  });
  
  return found;
};

if (module) {
  module.exports = constructRectangle;
}
