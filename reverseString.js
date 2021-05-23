// Return the reverse of a given string.

// Input: “abcde”
// Output: “edcba”



//split string into an array
//set index to the last array value (i = string.length - 1)
//use for loop
//create a new empty array
//push index to the new array
//decrement index
//return reverse.join()


// function reverse(string) {
//   let split = string.split("")
//   let reverseArray = [];
//   for (i = string.length - 1; i >= 0; i--) {
//     reverseArray.push(string[i]);
//   }

//   return reverseArray.join('');
// }
// console.log(reverse("abcde"));


//without splitting
//set reverseArray to empty string
//strings have an index. 

function reverse(string) {
  let reverseArray = "";
  for (i = string.length - 1; i >= 0; i--) {
    reverseArray += string[i];
  }

  return reverseArray;
}
console.log(reverse("abcde"));