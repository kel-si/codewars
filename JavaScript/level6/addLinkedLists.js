//Instructions: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = function (l1, l2) {
  let reverseL1 = [];
  let reverseL2 = [];

  for (let i = l1.length - 1; i >= 0; i--) {
    reverseL1.push(l1[i]);
  }

  for (let i = l2.length - 1; i >= 0; i--) {
    reverseL2.push(l2[i]);
  }

  const num1 = reverseL1.join("");
  const num2 = reverseL2.join("");
  // console.log("num1", parseInt(num1));

  const sum = (parseInt(num1) + parseInt(num2)).toString().split("").reverse();

  let returnSum = [];

  for (let i = 0; i < sum.length; i++) {
    returnSum.push(parseInt(sum[i]));
  }

  return returnSum;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7, 0, 8]
