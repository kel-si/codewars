function partsSums(ls) {
  if (ls.length === 0) {
    return [0];
  }

  let sums = [0];

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
  return sums.sort((a, b) => b - a);

  // function arraySum(arr) {
  //   if (arr.length > 0) {
  //     let sum = sums[sums.length - 1] - arr[0];
  //     sums.push(sum);
  //     arr.shift();
  //     return arraySum(arr);
  //   } else {
  //     sums.push(0);
  //     return sums;
  //   }
  // }
  // return arraySum(ls);
}

console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
