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
var convertBST = function(root) {
  var sum = 0;

  var changeNode = function(root) {
    if (!root) {
      return;
    }
    else {
      changeNode(root.right);
      sum += root.val;
      root.val = sum;
      changeNode(root.left);
    }
  };

  changeNode(root);
  return root;
};

if (module.exports) {
  module.exports = convertBST;
}
