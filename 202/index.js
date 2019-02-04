/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var sum = 0;
  var map = new Map();

  while(true) {
    if (n === 1) {
      return true;
    }
    if (map.has(n)) {
      return false;
    }
    else {
      map.set(n, n);
    }

    sum = 0;
    while(n !== 0) {
      sum += Math.floor(n % 10) * Math.floor(n % 10);
      n = Math.floor(n / 10);
    }

    n = sum;
  }
};

if (module.exports) {
  module.exports = isHappy;
}
