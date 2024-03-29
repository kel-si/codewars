//A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. For n = 2, the output should be For n = 2, the output should be solution(n) = 5; For n = 3, the output should be solution(n) = 13.

function solution(n) {
  let numOfFours = ((n - 1) * n) / 2;

  return 4 * numOfFours + 1;
}
