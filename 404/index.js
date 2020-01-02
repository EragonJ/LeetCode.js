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
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0
  }

  const cache = root.left && !root.left.left && !root.left.right ? root.left.val : 0
  return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + cache
};

if (module) {
  module.exports = sumOfLeftLeaves
}