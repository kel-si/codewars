// Write a function that finds the sum of all its arguments.

function sum(...args) {
  // let argSum = 0;
  // for (let i = 0; i < args.length; i++) {
  //   argSum += args[i];
  // }
  // return argSum;

  //Refactor:
  // args is an array:
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 5
console.log(sum(5, 10, 15, 25)); // 55
console.log(sum(1)); // 1
