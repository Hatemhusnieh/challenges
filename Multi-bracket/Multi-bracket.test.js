'use strict';

const Stack = require('../Stacks and Queues/Stack.test');

function validateBrackets(str) {
  const stack = new Stack();
  const option = ['(', ')', '{', '}', '[', ']'];
  for (let i = 0; i < str.length; i++) {
    if (option.includes(str[i])) {
      if (!stack.front) stack.push(str[i]);
      else if (stack.front.value === option[option.indexOf(str[i]) - 1]) stack.pop();
      else stack.push(str[i]);
    }
  }
  return stack.front ? false : true;
}

describe('Validate Brackets', () => {
  it('return true when there is no violation', () => {
    const s1 = '(a){d}[s]';
    const s2 = '(hatem){s[]s}';
    const s3 = '({[YUP IT WORKS]})';
    expect(validateBrackets(s1)).toBeTruthy();
    expect(validateBrackets(s2)).toBeTruthy();
    expect(validateBrackets(s3)).toBeTruthy();
  });

  it('return false when there is violation', () => {
    const s1 = '({)[}]';
    const s2 = '(hatem)}s[]s}';
    const s3 = '({[NOP IT DOES NOT WORK]}';
    expect(validateBrackets(s1)).toBeFalsy();
    expect(validateBrackets(s2)).toBeFalsy();
    expect(validateBrackets(s3)).toBeFalsy();
  });
});
