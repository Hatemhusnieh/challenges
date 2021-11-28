'use strict';

// Generate the nth Fibonacci number, 2 different ways.

// irritative method
function fibo1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let ans = 0;
  let fir = 0;
  let sec = 1;
  for (let i = 2; i <= n; i++) {
    ans = fir + sec;
    fir = sec;
    sec = ans;
  }
  return ans;
}
// O(n)

//recursion method
function fibo2(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibo2(n - 1) + fibo2(n - 2);
  }
}
//O(2^n)

// using Binet’s Formula
function binet(n) {
  return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5));
}
//O(1)

describe('Fibonacci number', () => {
  it('Generate the nth Fibonacci number (irritative method)', () => {
    expect(fibo1(3)).toEqual(2);
    expect(fibo1(6)).toEqual(8);
    expect(fibo1(8)).toEqual(21);
    expect(fibo1(45)).toEqual(1134903170);
  });

  it('Generate the nth Fibonacci number (recursion method)', () => {
    expect(fibo2(3)).toEqual(2);
    expect(fibo2(6)).toEqual(8);
    expect(fibo2(8)).toEqual(21);
    expect(fibo2(45)).toEqual(1134903170);
  });

  it('Generate the nth Fibonacci number (Binet’s Formula)', () => {
    expect(binet(3)).toEqual(2);
    expect(binet(6)).toEqual(8);
    expect(binet(8)).toEqual(21);
    expect(binet(45)).toEqual(1134903170);
  });
});
