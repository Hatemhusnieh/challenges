'use strict';

const LinkedList = require('../linkedList.test');

function listReverse1(list) {
  const revList = new LinkedList();
  const _recursion = (head) => {
    if (head.next) _recursion(head.next);
    revList.append(head.value);
  };
  _recursion(list.head);
  return revList;
}

function listReverse2(list) {
  const revList = new LinkedList();
  let pointer = list.head;
  while (pointer) {
    revList.insert(pointer.value);
    pointer = pointer.next;
  }
  return revList;
}

function palindromeCheck1(list) {
  const arr = [];
  let pointer = list.head;
  while (pointer) {
    arr.push(pointer.value);
    pointer = pointer.next;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 0) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false;
    } else {
      if (arr[i] !== arr[arr.length - 1 - i] && i !== Math.ceil(arr.length / 2)) return false;
    }
  }
  return true;
}

function palindromeCheck2(list) {
  const revList = new LinkedList();
  const _recursion = (head) => {
    if (head.next) _recursion(head.next);
    revList.append(head.value);
  };
  _recursion(list.head);
  let pointer1 = list.head;
  let pointer2 = revList.head;
  while (pointer1 && pointer2) {
    if (pointer1.value !== pointer2.value) return false;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return true;
}

describe('Reverse a Linked List', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);

  it('reverse a linked list / recursive method', () => {
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
    expect(listReverse1(list).toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });

  it('reverse a linked list / irritative method', () => {
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
    expect(listReverse2(list).toString()).toEqual('{ 3 } -> { 2 } -> { 1 } -> NULL');
  });
});

describe('Validate whether or not a Linked List is palindrome.', () => {
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  list1.append(3);
  list1.append(2);
  list1.append(1);
  const list2 = new LinkedList();
  list2.append(1);
  list2.append(2);
  list2.append(2);
  list2.append(3);

  it('check a linked list / method 1', () => {
    expect(palindromeCheck1(list1)).toBeTruthy();
    expect(palindromeCheck1(list2)).toBeFalsy();
  });

  it('check a linked list / method 2', () => {
    expect(palindromeCheck2(list1)).toBeTruthy();
    expect(palindromeCheck2(list2)).toBeFalsy();
  });
});
