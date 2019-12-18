/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  const bits = []
  
  while (head) {
    bits.push(head.val)
    head = head.next
  }
  
  let sum = 0
  const digits = bits.length
  
  bits.forEach((bit, index) => {
    if (bit === 1) {
      sum += Math.pow(2, digits - index - 1) 
    }
  })
  
  return sum
};

if (module.exports) {
  module.exports = getDecimalValue
}
