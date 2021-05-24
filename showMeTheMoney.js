// Given a string, return true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false




//split them into an array
//for loop
//If conditions. If string contains $ then true. else false




function money(string) {
  // let moneyCheck = "";
  for (i = 0; i < string.length; i++) {
    // moneyCheck = string[i];
    if (string[i] == "$") {
      return true;
    }
    // else {
    //   return false;
    // }
  }
  return false;
}

console.log(money("i hate $ but i love money i know i know im crazy"))


