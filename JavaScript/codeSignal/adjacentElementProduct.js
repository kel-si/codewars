// Instructions: return the greatest product from two adjacent elements

function solution(inputArray) {
  let product = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length; i++) {
    const currProd = inputArray[i] * inputArray[i + 1];

    if (currProd > product) {
      product = currProd;
    }
  }
  return product;
}

console.log(solution([3, 6, -2, -5, 7, 3]));
