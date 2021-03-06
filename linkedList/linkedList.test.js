'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    return false;
  }

  toString() {
    let str = '';
    let pointer = this.head;
    while (pointer) {
      str += `{ ${pointer.value} } -> `;
      pointer = pointer.next;
    }
    return str += 'NULL';
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let pointer = this.head;
    while (pointer) {
      if (!pointer.next) {
        pointer.next = new Node(value);
        return;
      } else pointer = pointer.next;
    }
  }

  insertBefore(oldValue, newValue) {
    let pointer = this.head;
    if (pointer.value === oldValue) {
      this.insert(newValue);
    } else {
      while (pointer.next.value !== oldValue) {
        pointer = pointer.next;
      }
      let temp = pointer.next;
      pointer.next = new Node(newValue);
      pointer.next.next = temp;
    }
  }

  insertAfter(oldVal, newVal) {
    let pointer = this.head;
    while (pointer.value !== oldVal) {
      pointer = pointer.next;
    }
    if (!pointer.next) {
      pointer.next = new Node(newVal);
      return;
    } else {
      let temp = pointer.next;
      pointer.next = new Node(newVal);
      pointer.next.next = temp;
    }
  }

  kthFromEnd(k) {
    if (k < 0) return 'Exception / K is a negative number';
    if (!this.head.next) return `Exception / Linked list is size of one, only position (0) is declared (${this.head.value})`;
    let arr = [];
    let pointer = this.head;
    while (pointer) {
      arr.push(pointer.value);
      pointer = pointer.next;
    }
    if (arr.length < k) return 'Exception';
    if (arr.length === k) return arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (k === arr.length - 1 - i) return arr[i];
    }
  }
}

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const linkList = new LinkedList();
    expect(linkList).toBeDefined();
    expect(linkList.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.head.value).toBeDefined();
    expect(ll.head.next.value).toBeDefined();
    expect(ll.head.next.next.value).toBeDefined();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.includes('a')).toBeTruthy();
    expect(ll.includes('b')).toBeTruthy();
    expect(ll.includes('c')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.includes('b')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString()).toBeDefined();
    expect(ll.toString().length).toBeGreaterThan(0);
    expect(ll.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
});

describe('Linked List Insertions', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('c');
    expect(ll.head.next.value).toEqual('c');
    expect(ll.head.next.next).toEqual(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertBefore('b', 'z');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('z');
    expect(ll.head.next.next.value).toEqual('b');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertBefore('a', 'z');
    expect(ll.head.value).toEqual('z');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next.next).toEqual(null);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  });
});

describe('k-th value from the end of a linked list', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(2);
  ll.append(3);
  ll.append(4);
  ll.append(5);
  it('Where k is greater than the length of the linked list', () => {
    expect(ll.kthFromEnd(6)).toEqual('Exception');
  });
  it('Where k and the length of the list are the same', () => {
    expect(ll.kthFromEnd(4)).toEqual(1);
  });
  it('Where k is not a positive integer', () => {
    expect(ll.kthFromEnd(-1)).toEqual('Exception / K is a negative number');
  });
  it('Where the linked list is of a size 1', () => {
    const ll2 = new LinkedList();
    ll2.append(1);
    expect(ll2.kthFromEnd(2)).toEqual('Exception / Linked list is size of one, only position (0) is declared (1)');
  });
  it('???Happy Path??? where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(ll.kthFromEnd(0)).toEqual(5);
    expect(ll.kthFromEnd(1)).toEqual(4);
    expect(ll.kthFromEnd(2)).toEqual(3);
  });
});

module.exports = LinkedList;
