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
var sumRootToLeaf = function(root) {  
  return traverse(root)
};

const traverse = function(root, binaryString = '') {
  if (!root.left && !root.right) {
    binaryString += '' + root.val
    return parseInt(binaryString, 2)
  }
  
  
  let result = 0
  if (root.left) {
    result += traverse(root.left, binaryString + '' + root.val)
  }
  
  if (root.right) {
    result += traverse(root.right, binaryString + '' + root.val)
  }
  
  return result
}

if (module) {
  module.exports = sumRootToLeaf;
}
