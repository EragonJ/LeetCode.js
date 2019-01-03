/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var getDepth = function(node, depth) {
    if (!node) {
      return 0;    
    }
    
    if (!node.left && !node.right) {
      return depth;
    }
    
    if (node.left && node.right) {
      return Math.max(getDepth(node.left, depth + 1), getDepth(node.right, depth + 1));
    }
    
    if (node.left) {
      return getDepth(node.left, depth + 1);
    }
    
    if (node.right) {
      return getDepth(node.right, depth + 1);
    }
  };
  
  return getDepth(root, 1);
};

if (module) {
  module.exports = maxDepth;
}
