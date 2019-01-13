/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  var line = 1;
  var width = 0;
  
  for (var i = 0; i < S.length; i++) {
    var wIndex = S.charCodeAt(i) - 97;
    var currentWidth = widths[wIndex];
    width += currentWidth;
    
    if (width > 100) {
      line ++;
      width = currentWidth;
    }
  }
  
  return [line, width];
};

if (module.exports) {
  module.exports = numberOfLines;
}
