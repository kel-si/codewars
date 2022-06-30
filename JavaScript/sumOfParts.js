/*Instructions: 
input : ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0] */

function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }

  let sums = [];

  let initialSum = 0;
  for (let i = 0; i < ls.length; i++) {
    initialSum += ls[i];
  }
  sums.push(initialSum);

  for (let i = ls.length - 1; i > 0; i--) {
    initialSum -= ls[0];
    sums.push(initialSum);
    ls.shift();
  }
  sums.push(0);
  return sums;
}

console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
