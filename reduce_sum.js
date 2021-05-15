// Return the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

// Input: [1, 2, 3, 4]
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

// var array = [1, 2, 3, 4];
// var arraySum = 0;
// var i = 0;
// while (i < array.length) {
//   arraySum = arraySum + array[i];
//   i++;
// }
// console.log(arraySum);



function arraySum(array) {
  var arraySum = 0;
  var i = 0;
  while (i < array.length) {
    arraySum = arraySum + array[i];
    i++;
  };
  return arraySum;
}


console.log(arraySum([1, 2, 3, 4]));