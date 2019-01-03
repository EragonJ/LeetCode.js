/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var chunks = s.split(' ');
  var newChunks = [];
  chunks.forEach((chunk) => {
    newChunks.push(chunk.split('').reverse().join(''));
  });
  return newChunks.join(' ');
};

if (module) {
  module.exports = reverseWords;
}
