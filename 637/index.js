/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const sum = []
  const count = []

  traverse(root, 0, sum, count)

  return sum.map((val, index) => {
    return (val / count[index])
  })
};
// @lc code=end

const traverse = function(root, depth, sum, count) {
  if (!root) {
    return
  }
  
  if (typeof sum[depth] === 'undefined') {
    sum[depth] = 0
  }

  if (typeof count[depth] === 'undefined') {
    count[depth] = 0
  }

  sum[depth] += root.val
  count[depth] += 1

  traverse(root.left, depth + 1, sum, count)
  traverse(root.right, depth + 1, sum, count)
}

if (module.exports) {
  module.exports = averageOfLevels;
}
