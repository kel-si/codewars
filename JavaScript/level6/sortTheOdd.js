/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

function sortArray(array) {
  let odd = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  const sortedOdd = odd.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sortedOdd.splice(i, 0, array[i]);
    }
  }
  return sortedOdd;
}
