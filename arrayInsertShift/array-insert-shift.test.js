'use strict';

function insertShiftArray(arr, val) {
  const idx = Math.ceil(arr.length / 2);
  let temp1 = arr[idx];
  let temp2;
  arr[idx] = val;
  for (let i = idx + 1; i < idx * 2; i++) {
    temp2 = arr[i];
    arr[i] = temp1;
    temp1 = temp2;
  }
  return arr;
}

function deleteShiftArray(arr) {
  const idx = Math.ceil(arr.length / 2);
  let counter = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) {
      i;
    } else {
      newArr[counter] = arr[i];
      counter++;
    }
  }
  return arr = newArr;
}

describe('insert-shift-array', () => {
  it('insert an element at a certain position', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(insertShiftArray(arr, 15)).toEqual([1, 2, 3, 15, 4, 5]);
  });
});

describe('delete-shift-array', () => {
  it('delete an element at middle of an array', () => {
    const arr = [1, 2, 3, 15, 4, 5];
    expect(deleteShiftArray(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});
