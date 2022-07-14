function getTheVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  let vowelCounter = 0;
  let indexCounter = 0;
  for (let i = 0; i < word.length; i++) {
    if (indexCounter > 4) {
      indexCounter = 0;
    }
    if (word[i] === vowels[indexCounter]) {
      vowelCounter++;
      indexCounter++;
    }
  }
  return vowelCounter;
}

console.log(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie")); // 7
// ("aeiou ae"); // 7
