/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) {
    return null;
  }
  
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  else if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  else if (!root.left && !root.right) {
    return root;
  }
  else {
    var newRoot = new TreeNode(root.val);
    newRoot.left = trimBST(root.left, L, R);
    newRoot.right = trimBST(root.right, L, R);
    return newRoot;
  }
};

if (module.exports) {
  module.exports = trimBST;
}
