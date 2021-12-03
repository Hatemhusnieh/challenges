'use strict';

function secondMax(arr) {
  if (arr.length < 1) return 'the array is empty';
  if (arr.length === 1) return 'the array contains only a single number';
  let max = 0;
  let secMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      secMax = max;
      max = i;
    }
  }
  return secMax;
}

function sameLetter(str1, str2) {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  return arr1.every((elm, i) => elm === arr2[i]);
}

describe('second max index', () => {
  it('return the second max index', () => {
    const arr = [12, 20, 1, 65, 3, 45, 56, 78];
    expect(secondMax(arr)).toEqual(3);
  });

  it('return an exception if the array contains a single number', () => {
    const arr = [45];
    expect(secondMax(arr)).toEqual('the array contains only a single number');
  });

  it('return an exception if the array is empty', () => {
    const arr = [];
    expect(secondMax(arr)).toEqual('the array is empty');
  });
});

describe('same letter', () => {
  it('return true if two strings have the same letters', () => {
    const str1 = 'add';
    const str2 = 'dad';
    expect(sameLetter(str1, str2)).toBeTruthy();
  });

  it('return false if two strings do not have the same letters', () => {
    const str1 = 'add';
    const str2 = 'ada';
    expect(sameLetter(str1, str2)).toBeFalsy();
  });
});
