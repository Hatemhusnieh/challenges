'use strict';

const Stack = require('../Stacks and Queues/Stack.test');
const Queue = require('../Stacks and Queues/Queue.test');

// getMaxStack() {
//   let max = 0;
//   let pointer = this.front;
//   while (pointer) {
//     if (pointer.value > max) max = pointer.value;
//     pointer = pointer.next;
//   }
//   return max;
// }

function duckDuckGoose(arr, k) {
  const queue = new Queue();
  let counter;
  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
  }
  while (queue.front.next) {
    counter = 1;
    while (counter < k) {
      queue.enqueue(queue.dequeue());
      counter++;
    }
    queue.dequeue();
  }
  return queue.front.value;
}

describe('Max Stack', () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(15);
  stack.push(4);
  stack.push(23);
  stack.push(6);
  it('it get the max value in a stack', () => {
    expect(stack.getMaxStack()).toEqual(23);
  });
});

describe('Duck Duck Goose', () => {
  const arr1 = ['A', 'B', 'C', 'D', 'E'];
  const arr2 = ['hatem', 'taima', 'ghazi', 'mohammad', 'osama', 'soad', 'salwa', 'ahmad', 'gaith', 'naji', 'fatima'];
  it('it return only a single name dependent on the argument number', () => {
    expect(duckDuckGoose(arr1, 3)).toEqual('D');
    expect(duckDuckGoose(arr1, 2)).toEqual('C');
    expect(duckDuckGoose(arr2, 22)).toEqual('naji');
    expect(duckDuckGoose(arr2, 9)).toEqual('osama');
    expect(duckDuckGoose(arr2, 3)).toEqual('salwa');
    expect(duckDuckGoose(arr2, 16)).toEqual('hatem');
  });
});
