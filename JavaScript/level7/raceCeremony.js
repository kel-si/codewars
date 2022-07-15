function racePodium(blocks) {
  let first;
  let second;
  let third;

  if (blocks % 3 === 0) {
    second = blocks / 3;
    first = second + 1;
    third = second - 1;
  } else {
    const divide = Math.floor(blocks / 3);
    second = divide + 1;
    third = divide - 1;
    first = blocks - second - third;
  }
  if (first === second && third === 1) {
    second--;
    first++;
  }
  if (first === second && third !== 1) {
    third--;
    first++;
  }

  return [second, first, third];
}

console.log(racePodium(11)); // [4, 5, 2]
console.log(racePodium(6)); // [2, 3, 1]
console.log(racePodium(10)); // [4, 5, 1]
console.log(racePodium(100000)); // [33334, 33335, 33331]
console.log(racePodium(7)); // [2, 4, 1]
