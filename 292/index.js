/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return (n%4 !== 0);
};

if (module) {
  module.exports = canWinNim;
}
