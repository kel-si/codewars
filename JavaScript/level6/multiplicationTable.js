// Given a number, print out a multiplication table up to and including that number

// table(3)

// [0, 1, 2, 3]
// [1, 1, 2, 3],
// [2, 2, 4, 6],
// [3, 3, 6, 9]]

function table(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(i);
  }

  for (let i = 1; i <= n; i++) {
    let counter = [];
    counter.push(i);
    for (let j = 1; j <= n; j++) {
      counter.push(j * i);
    }
    result.push(counter);
  }
  return result;
}

console.log(table(3));
