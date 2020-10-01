/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let cache = [];
  indices.forEach((targetIndex, characterIndex) => {
    cache[targetIndex] = s[characterIndex];
  });
  return cache.join('');
};