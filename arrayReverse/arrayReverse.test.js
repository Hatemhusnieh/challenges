'use strict';

const reverseArray = require('./arrayReverse');

describe('reverse array', () => {
  it('reverse the element of an array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(reverseArray(arr)).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
