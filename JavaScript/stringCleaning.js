//instructions: Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
  //replace any characters that match 0-9 with "" (removes the numbers)
  return s.replace(/[0-9]/g, "");
}

//source: https://bobbyhadz.com/blog/javascript-remove-all-numbers-from-string#:~:text=To%20remove%20all%20numbers%20from,doesn't%20contain%20any%20numbers.
