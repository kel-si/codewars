//Instructions: bitwiseOne takes an array of two strings which will only contain strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string were there are zeroes in both binary strings, otherwise it places a 1.

function bitwiseOne(strArr) {
  let num1 = strArr[0];
  let num2 = strArr[1];

  let numArr = [];

  // helper function to check digits
  function compare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        numArr.push(parseInt(arr1[i]));
      } else {
        numArr.push(1);
      }
    }
    // converts array to string
    return numArr.join("");
  }

  // returning the output of the function
  return compare(num1, num2);
}

console.log(bitwiseOne(["00011", "01010"])); //01011
