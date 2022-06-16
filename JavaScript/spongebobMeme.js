// Instructions:
// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"
function spongeMeme(sentence) {
  let text = "";
  for (let i = 0; i < sentence.length; i++) {
    i % 2 === 0
      ? (text += sentence[i].toUpperCase())
      : (text += sentence[i].toLowerCase());
  }
  return text;
}

console.log(spongeMeme("Stop making spongebob memes!"));
