function sum(...args) {
  let argSum = 0;
  for (let i = 0; i < args.length; i++) {
    argSum += args[i];
  }
  return argSum;
}

console.log(sum(1, 2, 3)); // 5
console.log(sum(5, 10, 15, 25)); // 55
console.log(sum(1)); // 1
