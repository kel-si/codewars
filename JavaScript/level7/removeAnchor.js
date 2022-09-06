// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  // url.split("#") returns an array with everything in front of the # ('www.codewars.com/katas/?page=1') in the 0th element and everthing after ('about') in the 1th element
  return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
