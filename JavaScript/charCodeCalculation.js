function calc(x) {
  let str = "";
  for (const char of x) {
    str += char.charCodeAt().toString();
  }

  const onesStr = str.replace(/7/g, "1");

  let num = 0;
  for (const char of str) {
    num += parseInt(char);
  }

  let onesNum = 0;
  for (const char of onesStr) {
    onesNum += parseInt(char);
  }

  return num - onesNum;
}

console.log(calc("ABC"));
