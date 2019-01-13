/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {  
  var targetValue = root.val;
  return traverse(root, targetValue);
};

var traverse = function(root, targetValue) {
  if (!root) {
    return true;
  }
  else if (root.val !== targetValue) {
    return false;
  }
  else {
    var leftResult = traverse(root.left, targetValue);
    if (!leftResult) {
      return false;
    }
    else {
      return traverse(root.right, targetValue);
    }
  }
};

if (module.exports) {
  module.exports = isUnivalTree;
}
