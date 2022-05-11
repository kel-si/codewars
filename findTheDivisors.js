/*

Instructions:

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

*/

function divisors(integer) {
  let results = [];

  // begin checking at 2 as we want the results in order and omitting 1
  //end at the number before the integer to not include itself in results

  for (let i = 2; i < integer - 1; i++) {
    if (integer % i === 0) {
      results.push(i);
    }
  }
  if (results.length === 0) {
    return `${integer} is prime`;
  } else {
    return results;
  }
}
