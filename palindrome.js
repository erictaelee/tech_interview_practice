// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false




//write a function that reverses the string
//create a palindrome function
//if string == reverseString
//if string == string.reverse()
//return true
//else false



function palindrome(string) {
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return reversedString === string;
}
console.log(palindrome("hello"))
console.log(palindrome("racecar"))