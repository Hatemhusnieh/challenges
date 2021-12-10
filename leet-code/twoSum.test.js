'use strict';

function twoSum(nums, target) {
  if (nums.length < 2) return 'input array has less than the minimum length of 2';
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
  return 'target can nor be acquired';
}

function twoSumEnhanced(nums, target) {
  if (nums.length < 2) return 'input array has less than the minimum length of 2';
  const map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    if (map.has(temp)) {
      res.push(map.get(temp), i);
      return res;
    } else {
      map.set(nums[i], i);
    }
  }
  return 'target can not be acquired';
}

describe('Two Sums', () => {
  it('return two indices that result the target', () => {
    const arr1 = [2, 7, 11, 15];
    const arr2 = [2, 3, 11, 15, 4, 5];
    const arr3 = [3, 2, 4];
    expect(twoSum(arr1, 9)).toEqual([0, 1]);
    expect(twoSum(arr2, 9)).toEqual([4, 5]);
    expect(twoSum(arr3, 6)).toEqual([1, 2]);
  });

  it('return two indices that result the target / enhanced', () => {
    const arr1 = [2, 7, 11, 15];
    const arr2 = [2, 3, 11, 15, 4, 5];
    const arr3 = [3, 2, 4];
    expect(twoSumEnhanced(arr1, 9)).toEqual([0, 1]);
    expect(twoSumEnhanced(arr2, 9)).toEqual([4, 5]);
    expect(twoSumEnhanced(arr3, 6)).toEqual([1, 2]);
  });

  it('the input array must be at least input of 2 and maximum length of 10000', () => {
    const arr = [2];
    const target = 2;
    expect(twoSum(arr, target)).toEqual('input array has less than the minimum length of 2');
  });

  it('it return exception if no result found', () => {
    const arr = [2, 5, 12];
    const target = 8;
    expect(twoSum(arr, target)).toEqual('target can nor be acquired');
  });
});
