/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    var root1Sequences = getSequences(root1);
    var root2Sequences = getSequences(root2);

    if (root1Sequences.length != root2Sequences.length) {
        return false;
    }
    else {
        for (var i = 0; i < root1Sequences.length; i++) {
            if (root1Sequences[i] !== root2Sequences[i]) {
                return false;
            }
        }
        return true;
    }
};

var getSequences = function(root, sequences = []) {
    if (root === null) {
        // do nothing
        return sequences;
    }
    else if (root.left === null && root.right === null) {
        sequences.push(root.val);
        return sequences;
    }
    else {
        getSequences(root.left, sequences);
        getSequences(root.right, sequences);
        return sequences;
    }
};

if (module.exports) {
  module.exports = leafSimilar;
}
