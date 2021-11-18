'use strict';

function reverseArray(arr) {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr[arr.length - 1 - i] = arr[i];
  }
  return revArr;
}

module.exports = reverseArray;
