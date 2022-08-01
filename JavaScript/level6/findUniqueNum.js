//There is an array with some numbers. All numbers are equal except for one. Try to find it! It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
  arr.sort((a, b) => a - b);

  let first = arr[0];
  let num2 = arr[1];
  let last = arr[arr.length - 1];

  return first === num2 ? last : first;
}
