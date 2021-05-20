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



// var string = "What's the weather like today";
// var reverse = "";
// var i = string.length - 1;

// while (i >= 0) {
//   reverse = reverse + string[i]
//   i--;
// }

// console.log(reverse);