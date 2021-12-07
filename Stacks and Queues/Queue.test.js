'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    if (!this.front) {
      this.front = new Node(val);
      this.back = this.front;
    } else {
      this.back.next = new Node(val);
      this.back = this.back.next;
    }
  }

  dequeue() {
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

describe('Queue', () => {
  it('Can successfully instantiate an empty queue', () => {
    const q = new Queue();
    expect(q).toBeDefined();
  });

  it('Can successfully enqueue into a queue', () => {
    const q = new Queue();
    q.enqueue(1);
    expect(q.front.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    expect(q.front.value).toEqual(1);
    expect(q.front.next.value).toEqual(2);
    expect(q.front.next.next.value).toEqual(3);
    expect(q.back.value).toEqual(4);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.front.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.dequeue();
    q.dequeue();
    expect(q.front).toBeNull();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    const q = new Queue();
    expect(q.dequeue()).toEqual('exception');
    expect(q.peek()).toEqual('exception');
  });

  it('check if the Queue is empty', () => {
    const q1 = new Queue();
    const q2 = new Queue();
    q2.enqueue(1);
    expect(q1.isEmpty()).toBeTruthy();
    expect(q2.isEmpty()).toBeFalsy();
  });
});

module.exports = Queue;
