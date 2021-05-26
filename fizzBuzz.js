// if i is a multipe of 3 and 5, print fizzbuzz
// if i is a multple of 3(but not 5) print fizz
// if i is a multple of 5(but not 3) print buzz
// if i is not a multiple of 3 or 5, print the vlaue of i


//set variable i = 0
//if conditional loop
//if i / 3 = 0 then fizz
//if i / 5 = 0 then buzz
//if i / 3 = 0 && i /5 = 0 then fizzbuzz
//else return i

function fizzBuzz(integer) {
  let currentNumber = 1;
  while (currentNumber <= integer) {
    if (currentNumber % 3 == 0) {
      console.log("Fizz");
    }
    else {
      console.log(currentNumber);
    }

    currentNumber++;
  }
  return currentNumber;
}
(fizzBuzz(3));