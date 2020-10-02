/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let digits = [];

  while (num !== 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  
  digits = digits.reverse();
  
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 6) {
      digits[i] = 9;
      break;
    }
  }
  
  return parseInt(digits.join(''), 10);
};