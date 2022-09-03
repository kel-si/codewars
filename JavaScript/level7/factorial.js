/*
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/

function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError;
  }

  let product = 1;

  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
}
