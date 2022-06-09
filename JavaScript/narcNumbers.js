function isNarcissistic(n) {
  const str = n.toString();
  const length = str.length;

  let sum = 0;
  for (let char of str) {
    sum += Math.pow(parseInt(char), length);
  }

  if (sum === n) {
    return true;
  }

  return false;
}

console.log(isNarcissistic(153));
