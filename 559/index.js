/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  
  return traverse(root, 1)
};

const traverse = function(root, depth) {
  if (!root.children) {
    return depth  
  }
  
  let max = depth
  root.children.forEach((child) => {
    max = Math.max(max, traverse(child, depth + 1))
  })
  
  return max
} 

if (module.exports) {
  module.exports = maxDepth;
}
