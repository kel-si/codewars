//Instructions: Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  // remove special characters
  const replaced = sen.replace(/[^a-z0-9]/gi, " ");

  // each word as an element
  const senSplit = replaced.split(" ");

  let longestWord = senSplit[0];
  for (let i = 0; i < senSplit.length; i++) {
    if (senSplit[i].length > longestWord.length) {
      longestWord = senSplit[i];
    }
  }
  return longestWord;
}
