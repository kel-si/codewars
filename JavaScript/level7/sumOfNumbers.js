/*
Instructions: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  const sorted = [a, b].sort((a, b) => a - b);
  let add = 0;

  for (let i = sorted[0]; i <= sorted[1]; i++) {
    add += i;
  }
  return add;
}

console.log(getSum(5, 2)); // 14
