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
var reverseList = function(head) {
  if (!head) { 
    return head; 
  }
  
  var nodes = [head];
  while (head.next) {
    nodes.push(head.next);
    head = head.next;
  }
  
  nodes.reverse().forEach((node, index) => {
    node.next = nodes[index + 1] || null;
  });
  
  return nodes[0];
};

module.exports = reverseList;
