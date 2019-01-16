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
var increasingBST = function(root) {
  var nodes = [];
  traverse(root, nodes);
  
  for (var i = 0; i < nodes.length - 1; i++) {
    nodes[i].right = nodes[i + 1];
  }
  return nodes[0];
};

var traverse = function(root, results = []) {
  if (!root) {
    return;  
  }
  
  if (!root.left && !root.right) {
    results.push(new TreeNode(root.val));
    return;
  }
  
  traverse(root.left, results);
  results.push(new TreeNode(root.val));
  traverse(root.right, results);
};

if (module.exports) {
  module.exports = increasingBST;
}
