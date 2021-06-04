// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// i = 0
// set an empty array
// while number < 10
// if number % 3 == 0 || number % 5 == 0
// puts number





function multiples(number) {
  let i = 0;
  let array = new Array(number);
  while (i < number) {
    if (number % 3 == 0 || number % 5 == 0) {
      array.push(number);
    }
    i++;
  }
}
console.log(multiples(10));
