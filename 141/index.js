/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  while (head) {
    if (head._isTraversed) {
      return true;
    }
    else {
      head._isTraversed = true;
      head = head.next;
    }
  }
  return false;
};

if (module.exports) {
  module.exports = hasCycle;
}
