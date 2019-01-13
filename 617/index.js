/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  // t1 + t2
  // t1.left + t2.left
  // t1.right + t2.right
  return merge(t1, t2);
};

var merge = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }
  
  var node = new TreeNode();
  
  if (t1 && t2) {
    node.val = t1.val + t2.val;
  }
  else {
    if (t1) {
      node.val = t1.val;
    }
    else {
      node.val = t2.val;
    }
  }
  
  node.left = merge(t1 && t1.left, t2 && t2.left);
  node.right = merge(t1 && t1.right, t2 && t2.right);
  
  return node;
};

if (module.exports) {
  module.exports = mergeTrees;
}
