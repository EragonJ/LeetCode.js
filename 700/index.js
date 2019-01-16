/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (root === null) {
    return;
  }
  else if (root.val === val) {
    return root;
  }
  else {
    var left = searchBST(root.left, val);
    if (left) {
      return left;
    }
    
    var right = searchBST(root.right, val);
    if (right) {
      return right;
    }
    
    return null;
  }
};

if (module.exports) {
  module.exports = searchBST;
}
