/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._nums = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._nums.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this._nums.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._nums[this._nums.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min.apply(this, this._nums);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

if (module.exports) {
  module.exports = MinStack;
}
