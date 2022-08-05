// takes in a string, returns first non repeating character

function singleChar(str) {
  let obj = {};

  for (const char of str.split("")) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  for (const x in obj) {
    if (obj[x] === 1) {
      return x;
    }
  }
  return null;
}

console.log(singleChar("It's life's illusions I recall"));
console.log(singleChar("pacing the rocks staring out at the midnight sea"));
console.log(singleChar("Aabcdef")); // A -- not case sensitive
