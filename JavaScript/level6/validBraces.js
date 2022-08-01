//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid. This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea! All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}. What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces) {
  let openings = [];

  for (const bracket of braces) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      openings.push(bracket);
    } else if (
      bracket === ")" &&
      openings.length > 0 &&
      openings[openings.length - 1] === "("
    ) {
      openings.pop();
    } else if (
      bracket === "}" &&
      openings.length > 0 &&
      openings[openings.length - 1] === "{"
    ) {
      openings.pop();
    } else if (
      bracket === "]" &&
      openings.length > 0 &&
      openings[openings.length - 1] === "["
    ) {
      openings.pop();
    } else {
      if (
        bracket === ")" ||
        bracket === "}" ||
        (bracket === "]" && openings.length !== 0)
      ) {
        return false;
      }
    }
  }
  return openings.length === 0;
}
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(]")); // false
