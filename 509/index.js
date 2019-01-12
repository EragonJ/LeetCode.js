/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, cache = [0, 1]) {
    if (typeof cache[N] !== 'undefined') {
        return cache[N];
    }
    else {
        cache[N] = fib(N-1, cache) + fib(N-2, cache);
        return cache[N];
    }
};

if (module.exports) {
  module.exports = fib;
}
