/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var result = [];
  for (left; left <= right; left++) {
    var digits = getAllDigits(left);
    if (isSelfDividingNumber(left, digits)) {
      result.push(left);
    }
  }
  
  return result;
};

var getAllDigits = function(i) {
  var result = [];
  
  while (i) {
    result.push(i%10);
    i = Math.floor(i / 10);
  }
  
  return result;
};

var isSelfDividingNumber = function(targetNumber, digits) {
  var result = true;
  for (var i = 0; i < digits.length; i++) {
    if (digits[i] === 0 || targetNumber % digits[i] !== 0) {
      result = false;
      break;
    }
  }
  
  return result;
};

if (module.exports) {
  module.exports = selfDividingNumbers;
}
