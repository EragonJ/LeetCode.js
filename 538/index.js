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
  
  // [2, 5, 13, ....]
  var result = [];
  traverse(root, result);
  
  // values are sorted beacuse this is BST
  var map = {};
  for (var i = 0; i < result.length; i++) {
    // map{2 : 2}
    map[result[i]] = result[i];
    
    // map{2 : 20}
    for (var j = result.length - 1; j > i && result[j] > result[i]; j--) {
      map[result[i]] += result[j];
    }
  }
  
  traverse2(root, map);
  return root;
};

var traverse = function (root, result = []) {
  if (!root) {
    return;
  }
  else {
    traverse(root.left, result);
    result.push(root.val);
    traverse(root.right, result);
  }
};

var traverse2 = function(root, map = {}) {
  if (!root) {
    return;
  }
  else {
    traverse2(root.left, map);
    root.val = map[root.val];
    traverse2(root.right, map);
  }
}

if (module.exports) {
  module.exports = convertBST;
}
