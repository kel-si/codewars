//Instructions: Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  //takes an array of numbers; square each and total
  let sum = 0;
  for (let num of numbers) {
    sum += Math.pow(num, 2);
  }
  return sum;
}
