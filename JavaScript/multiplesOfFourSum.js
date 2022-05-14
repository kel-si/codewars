// return a sum of all integers divisible by 4

function solution(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 4 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473])); // -16
