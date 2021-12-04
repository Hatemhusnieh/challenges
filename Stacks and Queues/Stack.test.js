'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.front = null;
  }

  push(val) {
    if (!this.front) {
      this.front = new Node(val);
    } else {
      let node = new Node(val);
      node.next = this.front;
      this.front = node;
    }
  }

  pop() {
    if (!this.front) return 'exception';
    const val = this.front.value;
    this.front = this.front.next;
    return val;
  }

  peek() {
    if (!this.front) return 'exception';
    return this.front.value;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

describe('Stack', () => {
  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.front.value).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.front.value).toEqual(3);
    expect(stack.front.next.value).toEqual(2);
    expect(stack.front.next.next.value).toEqual(1);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.front.value).toEqual(2);
    expect(stack.front.next.value).toEqual(1);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.front).toBeNull();
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new Stack();
    expect(stack.pop()).toEqual('exception');
    expect(stack.peek()).toEqual('exception');
  });

  it('check if a Stack is empty', () => {
    const stack = new Stack();
    const stack2 = new Stack();
    stack2.push(1);
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack2.isEmpty()).toBeFalsy();
  });
});

module.exports = Stack;
