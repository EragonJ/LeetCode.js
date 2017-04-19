/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var invert = function(node) {
    if (!node || !node.left && !node.right) {
      return;
    }
    
    var tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    
    if (node.left) {
      invert(node.left);
    }
    
    if (node.right) {
      invert(node.right);
    }
  };
  
  invert(root);
  return root;
};

module.exports = invertTree;
