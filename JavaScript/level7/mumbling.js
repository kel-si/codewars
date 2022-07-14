/*
Instructions: accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" 

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  s = s.toLowerCase();
  let counter = 0;
  let lettersArr = [];

  for (let i = 0; i < s.length; i++) {
    lettersArr.push(s[i].toUpperCase(), s[i].repeat(counter), "-");
    counter++;
  }
  return lettersArr.join("").slice(0, -1);
}

console.log(accum("frosty"));
// console.log(accum("ZpglnRxqenU"));
