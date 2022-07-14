/*
 Instructions:

 Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    counter += array[i];
  }

  if (array.length === 0 || counter === 0) {
    return "even";
  }
  return counter % 2 === 0 ? "even" : "odd";
}
