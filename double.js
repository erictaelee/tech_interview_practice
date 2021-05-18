// Given an array of numbers, return a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]


//while loop
function doubleArray(array) {
  var doubleArray = [];
  var i = 0;
  while (i < array.length) {
    doubleArray.push(array[i] * 2);
    i++;
  }
  return doubleArray;
}

console.log(doubleArray([4, 2, 5, 99, -4]));


//forEach loop

function doubleArray(array) {
  var doubleArray = [];
  array.forEach(function (array) {
    doubleArray.push(array * 2);
  });
  return doubleArray;
}
console.log(doubleArray([4, 2, 5, 99, -4]));
