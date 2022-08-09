/*
Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)
*/

function divisibleCount(x, y, k) {
  return Math.floor(y / k) - Math.floor((x - 1) / k);
}
