
// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”


//set index = 0;
//newString = ""
//while loop
//if i is even then capitalize 
//newString = string.toUpperCase()
//increment index by 1




function alternateCapitals(string) {
  let i = 0;
  let newString = "";
  // console.log(1 % 2)
  while (i < string.length) {
    if (i % 2 == 0) {
      newString += string[i];
    } else {
      newString += string[i].toUpperCase();
    }
    i++;
  }
  return newString;
}

console.log(alternateCapitals("hello, how are your porcupines today?"))