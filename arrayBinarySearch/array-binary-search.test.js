'use strict';

function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  let idx = Math.round(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (arr[idx] === val) return idx;
    if (arr[idx] < val) {
      idx = low;
      low = idx + 1;
      idx = Math.ceil((high + idx) / 2);
    } else {
      idx = high;
      high = idx - 1;
      idx = Math.ceil((high - low) / 2);
    }
  }
  return -1;
}



describe('array binary search', () => {
  it('return the index of the required value if it exist', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(binarySearch(arr, 4)).toEqual(3);
    expect(binarySearch(arr, 7)).toEqual(6);
    expect(binarySearch(arr, 9)).toEqual(8);
  });

  it('return -1 if the value did not exist in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(binarySearch(arr, 9)).toEqual(-1);
    expect(binarySearch(arr, 2.5)).toEqual(-1);
  });
});

