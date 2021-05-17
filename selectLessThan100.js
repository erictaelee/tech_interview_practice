// Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]



function newArray(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] < 100) {
      newArray.push(array[i]);
    }
    i++;
  };
  return newArray;
}

console.log(newArray([99, 101, 88, 4, 2000, 50]));