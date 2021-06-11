// % / Write a function that returns whether a given number is a prime number.


// sample input -> 3
// sample output -> true
// sample input -> 8
// sample output - > false
// sample input -> 13
// sample output -> true


// input -> 8
// is input divisble by 8? 
// input -> 11 is a prime number



// if its divisible by its number or by 1
// return number


//input is 5%5 == 0 && 5%1 == 0  

function prime(number) {

  if (number % 2 == 0 || number % 4 == 0 || number % 6 == 0 || number % 8 == 0) {
    return false;
  }
  else if (number % number == 0 && number % 1 == 0) {
  }
  return true;
}

console.log(prime(3))
console.log(prime(6))
console.log(prime(11))
console.log(prime(20))


function isPrime(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
