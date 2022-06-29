function order(words) {
  const wordsArr = words.split(" ");

  let numbers = [];
  let obj = {};

  // keep track of indices (in order of the words)
  for (const word of wordsArr) {
    for (const char of word) {
      if (parseInt(char)) {
        numbers.push(parseInt(char) - 1);
      }
    }
  }

  // assign the index to the word
  for (let i = 0; i < numbers.length; i++) {
    obj[numbers[i]] = wordsArr[i];
  }

  // returning a string with all of the words in order
  let str = "";
  for (const key in obj) {
    str += `${obj[key]} `;
  }
  return str.trim();
}
