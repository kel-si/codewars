//Instructions: A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

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
