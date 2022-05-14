//return the smallest positive integer missing from the array

function solution(A) {
  array = A.sort((a, b) => a - b);
  let check = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === check) {
      check++;
    } else {
      return check;
    }
  }
  return check++;
}

console.log(solution([5, 3, 6]));
