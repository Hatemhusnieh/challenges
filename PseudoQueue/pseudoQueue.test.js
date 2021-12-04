'use strict';

const Stack = require('../Stacks and Queues/Stack.test');

class PseudoQueue {
  constructor() {
    this.qf = new Stack();
    this.qb = new Stack();
  }

  enqueue(val) {
    if (!this.qf.front) {
      this.qf.push(val);
      this.qb.push(val);
    } else {
      this.qb.pop();
      while (this.qf.front) {
        this.qb.push(this.qf.pop());
      }
      this.qf.push(val);
      while (this.qb.front) {
        this.qf.push(this.qb.pop());
      }
      this.qb.push(val);
    }
  }

  dequeue() {
    if (!this.qf.front) return 'exception';
    if (this.qf.front.value === this.qb.front.value) {
      this.qb.pop();
      return this.qf.pop();
    }
    return this.qf.pop();
  }
}

describe('Pseudo-Queue', () => {
  it('Enqueue', () => {
    const q = new PseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.qf.front.value).toEqual(1);
    expect(q.qf.front.next.value).toEqual(2);
    expect(q.qf.front.next.next.value).toEqual(3);
    expect(q.qb.front.value).toEqual(3);
  });

  it('Dequeue', () => {
    const q = new PseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.qb.front).toBeNull();
    expect(q.dequeue()).toEqual('exception');
  });
});
