/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const digits = []

  while (n) {
    const digit = n % 10
    digits.push(digit)
    n = Math.floor(n / 10)
  }

  let product
  let sum = 0

  digits.forEach((digit) => {
    sum += digit
    
    if (typeof product === 'undefined') {
      product = digit
    }
    else {
      product *= digit
    }
  })

  return product - sum
};

if (module) {
  module.exports = subtractProductAndSum
}
