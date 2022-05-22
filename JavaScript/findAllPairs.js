// Instructions:
// You are given array of integers, your task will be to count all pairs in that array and return their count.

function duplicates(array) {
  let pairs = 0;
  const sortedArr = array.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

console.log(duplicates([1, 4, 5, 2, 4, 1, 1])); // 2
