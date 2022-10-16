const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
      this.element = element;
      if (this.arr) {
        this.arr.push(this.element);
      } else {
        let arr = [];
        this.arr = arr;
        this.arr.push(this.element);
      }
  }

  pop() {
    return this.arr.pop(this.element);
  }

  peek() {
    if (this.element === null || this.element === undefined){
      return undefined;
    }
    if (this.element) {
      return this.arr[this.arr.length-1];
    }
  }
}

module.exports = {
  Stack
};
