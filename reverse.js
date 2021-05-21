// Take the sentence "What's the weather like today?" and reverse it
// Now, reverse the character order but keep the word order("s'tahw eht rehtaew ...")

// string = "What's the weather like today"



function reverse(string) {
  var reverse = ""
  for (i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}
console.log(reverse("What's the weather like today"))



//split the string 
//reverse each string
//push to a new array
//join the array


// function reverse(string) {
//   var reverse = ""
//   var split = string.split(" ")

// return reverse;
// }
// console.log(reverse("What's the weather like today"))
