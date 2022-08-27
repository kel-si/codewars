/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.
*/

function maxMultiple(divisor, bound) {
  for (let i = 1; i <= bound; i++) {
    if (divisor * i > bound) {
      return divisor * (i - 1);
    }
  }
}
