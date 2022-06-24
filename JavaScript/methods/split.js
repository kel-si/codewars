//split(separator)
//split(separator, limit)

const lyrics =
  "I wish I could fly / I'd pick you up and we'd go back in time / I'd write this in the sky / I miss you like it was the very first night";

// returns an array - new element starts at '/' (removed)
const lines = lyrics.split("/");
console.log("lines", lines);

//returns an array with one element (all lyrics)
const allLyrics = lyrics.split();
// console.log("all lyrics", allLyrics);

//returns an array with all words (& '/') as individual elements
const words = lyrics.split(" ");
// console.log("words", words);
