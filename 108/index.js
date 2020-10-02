/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let length = nums.length;
  
  if (length === 0) {
    return null
  }
  
  if (length === 1) {
    return new TreeNode(nums[0]);
  }
  
  let midIndex = Math.floor(length / 2);
  let leftNums = nums.slice(0, midIndex);
  let rightNums = nums.slice(midIndex + 1, length);
  
  return new TreeNode(
    nums[midIndex],
    sortedArrayToBST(leftNums),
    sortedArrayToBST(rightNums)
  ); 
};