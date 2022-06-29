function makeValley(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    i % 2 === 0 ? leftArr.push(sortedArr[i]) : rightArr.push(sortedArr[i]);
  }
  return leftArr.concat(rightArr.reverse());
}

console.log(makeValley([7, 6, 2, 20]));
