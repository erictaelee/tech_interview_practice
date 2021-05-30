// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”


//run down the string
//index = 0
//while i < string.length
//if string[index] == string[index + 1]
//string[index] = string[index + 1]
//break?
//return


function duplicateCharacter(string) {
  let i = 0;
  let firstDuplicate = "";
  while (i < string.length) {
    if (string[i] == string[i + 1]) {
      firstDuplicate = string[i]
      break;
    }
    i++;
  }
  return firstDuplicate;
}

console.log(duplicateCharacter("abcdefghhijkkloooop"));

