/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  var c;
  var pair;
  
  for (var i = 0; i < s.length; i++) {
    c = s[i];
    
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);  
    }
    else {
      pair = stack.pop() + c;
      if (pair === '()' || pair === '[]' || pair === '{}') {
        // pass
      }
      else {
        return false;
      }
    }
  }
  
  // if there is any remaining stuff
  if (stack.length >= 1) {
    return false;
  }
  
  return true;
};

if (module.exports) {
  module.exports = isValid;
}
