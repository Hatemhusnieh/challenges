# Leet Code Challenges

## Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

- Example 1:

```

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

```

- Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]

```

- Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]

```

## Count Number of Pairs With Absolute Difference K

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.

x if x < 0.

- Example 1:

```
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,-,-]
- [1,-,2,-]
- [-,2,-,1]
- [-,-,2,1]

```

## Minimum Number of Moves to Seat Everyone

There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

- Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)

Return the **minimum number of moves** required to move each student to a seat such that no two students are in the same seat.

Note that there may be **multiple** seats or students in the **same position** at the beginning.

- Example 1:

```
Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:

- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
  In total, 1 + 2 + 1 = 4 moves were used.

```
