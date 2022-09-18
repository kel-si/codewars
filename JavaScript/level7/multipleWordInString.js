//You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

function modifyMultiply(str, loc, num) {
  // string to repeat
  const arr = str.split(" ");
  const repeat = arr[loc];

  let repeatString = "";
  for (let i = 1; i < num; i++) {
    repeatString += `${repeat}-`;
  }
  return `${repeatString}${repeat}`;
}

// .fill method

console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"
