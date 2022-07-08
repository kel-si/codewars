/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
*/

function reduce(fraction) {
  let factors = [];

  for (let i = 0; i <= Math.min(...fraction); i++) {
    if (fraction[0] % i === 0 && fraction[1] % i === 0) {
      factors.unshift(i);
    }
  }

  return [fraction[0] / factors[0], fraction[1] / factors[0]];
}
