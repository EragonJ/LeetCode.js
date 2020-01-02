/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0
  }

  if (x === 1) {
    return 1
  }

  let found
  const max = Math.floor(x / 2)
  for (let i = 1; i <= max; i++) {
    if (i*i === x) {
      found = i
      break
    }
    else if (i*i < x && (i+1) * (i+1) > x) {
      found = i
      break
    }
  }

  return found
};

if (module.exports) {
  module.exports = mySqrt
}
