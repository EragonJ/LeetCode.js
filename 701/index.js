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
var insertIntoBST = function(root, val) {
  if (!root) {
    root.val = val
    return root
  }
  
  modifyBST(root, root, val)
  return root
};

const modifyBST = function(root, parent, val) {
  if (!root) {
    if (parent.val > val) {
      parent.left = new TreeNode(val) 
    }
    else {
      parent.right = new TreeNode(val)
    }
    return
  }
  if (root.val < val) {
    modifyBST(root.right, root, val)
    return
  }
  else {
    modifyBST(root.left, root, val)
    return
  }
}

if (module) {
  module.exports = insertIntoBST;
}
