/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var length = getLinkedListLength(head);
    var middleIndex = Math.round((length + 1)/2) - 1;
    var i = 0;
    while (i !== middleIndex) {
        i++;
        head = head.next;
    }
    return head;
};

var getLinkedListLength = function(head) {
    var testHead = head;
    var length = 1;
    while (testHead.next) {
        testHead = testHead.next;
        length++
    }
    return length;
};

if (module.exports) {
  module.exports = middleNode;
}
