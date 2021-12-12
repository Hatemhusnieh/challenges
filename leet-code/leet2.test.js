'sue strict';

function absolutePairs(arr, k) {
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k && i !== j && j > i) pairs++;
    }
  }
  return pairs;
}

function minMovesToSeat(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  console.log(seats);
  let moves = 0;
  for (let i = 0; i < students.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }
  return moves;
}

describe('Count Number of Pairs With Absolute Difference K', () => {
  it('return the number of pairs that satisfy K value', () => {
    expect(absolutePairs([1, 2, 2, 1], 1)).toEqual(4);
    expect(absolutePairs([3, 2, 1, 5, 4], 2)).toEqual(3);
  });
});

describe('Minimum Number of Moves to Seat Everyone', () => {
  it('return the number of moves each student must move', () => {
    expect(minMovesToSeat([3, 1, 5], [2, 7, 4])).toBe(4);
    expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
    expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
    expect(minMovesToSeat([3, 20, 17, 2, 12, 15, 17, 4, 15, 20], [10, 13, 14, 15, 5, 2, 3, 14, 3, 18])).toBe(28);
  });
});
