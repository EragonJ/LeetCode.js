/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var MAX_NUMBER = 2147483647;
  var MIN_NUMBER = -2147483648
  var cache = [];
  var factor = (x < 0) ? -1 : 1;
  x = Math.abs(x);
  
  while(true) {
    if (x === 0) {
      break;
    }
    cache.push(x % 10);
    x = Math.floor(x / 10);
  }

  var result = 0;
  cache.reverse().forEach((digit, index) => {
    result += digit * Math.pow(10, index) ;
  });
  
  result *= factor;
  if (result <= MAX_NUMBER && result >= MIN_NUMBER) {
    return result;
  }
  return 0;
};

if (module) {
  module.exports = reverse;
}
