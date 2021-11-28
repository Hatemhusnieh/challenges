'use strict';

// Given a matrix, find the sum of each row.

function sumMatrix(matrix) {
  return matrix.map(arr => arr.reduce((acc, int) => acc += int, 0));
}

describe('sum of matrix', () => {
  it('It find the sum of each row in a matrix', () => {
    expect(sumMatrix([[1, 2, 3], [3, 5, 7], [1, 7, 10]])).toEqual([6, 15, 18]);
    expect(sumMatrix([[0, 1, 5], [-4, 7, 2], [-3, 12, 11]])).toEqual([6, 5, 20]);
  });
});
