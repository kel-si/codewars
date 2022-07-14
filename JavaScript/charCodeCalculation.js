function calc(x) {
  // not finished!!

  let arr = [];
  for (const char of x) {
    arr.push(char.charCodeAt().toString());
  }

  // array with numbers as strings, 7 replaced with 1
  const replaceSeven = arr.map((x) => x.replace(/7/g, "1"));
  console.log("replace7", replaceSeven);

  const joinReplaceStr = replaceSeven.join("");
  console.log("join", typeof joinReplaceStr);

  const allReplaceDigits = Array.from(joinReplaceStr);
  console.log(allReplaceDigits);

  // add all digits in both

  // const replacedSeven = parseInt(arr.join("").replace(/7/g, "1"));
  // const initial = parseInt(arr.join(""));

  // console.log("initial------", initial);
  // console.log("replacedSeven", replacedSeven);
}

console.log(calc("Aabcdef"));
