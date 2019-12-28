/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }
  
  return traverse(root, sum, 0)
};

const traverse = function(root, sum, cache) {
  if (!root.left && !root.right) {
    return sum === cache + root.val
  }
  
  let leftResult = false
  let rightResult = false
  
  if (root.left) {
    leftResult = traverse(root.left, sum, cache + root.val)
  }
  
  if (root.right) {
    rightResult = traverse(root.right, sum, cache + root.val)
  }
  
  return leftResult || rightResult
}

if (module) {
  module.exports = hasPathSum
}
