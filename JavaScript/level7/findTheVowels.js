//Instructions: We want to know the position of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

function vowelIndices(word) {
  const indices = [];
  const lowerCaseWord = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (vowels.includes(lowerCaseWord[i])) {
      indices.push(i);
    }
  }
  return indices;
}
