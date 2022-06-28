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
