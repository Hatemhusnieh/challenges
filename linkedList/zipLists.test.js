'use strict';

const LinkedList = require('./linkedList.test');

function zipLists(list1, list2) {
  if (!list1.head || !list2.head) return 'Exception / can not zip an empty list';
  let pointer1 = list1.head;
  let pointer2 = list2.head;
  const zipList = new LinkedList();
  while (pointer1 || pointer2) {
    if (pointer1) {
      zipList.append(pointer1.value);
      pointer1 = pointer1.next;
    }
    if (pointer2) {
      zipList.append(pointer2.value);
      pointer2 = pointer2.next;
    }
  }
  return zipList;
}

describe('linked-list-zip', () => {
  it('it combines to symmetrical lists', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    expect(zipLists(list1, list2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL');
  });

  it('it combines none symmetrical lists', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    const list2 = new LinkedList();
    list2.append(2);
    expect(zipLists(list1, list2).toString()).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 5 } -> NULL');
  });

  it('it returns an exception if a inked list is empty', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    const list2 = new LinkedList();
    expect(zipLists(list1, list2)).toEqual('Exception / can not zip an empty list');
  });
});
