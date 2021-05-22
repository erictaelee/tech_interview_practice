// Given an array, return a new array that contains the original array’s values in reverse.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]



//create a new array
//index at the last array value
//decrement by 1

function reverse(array) {
  let reverseArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
console.log(reverse([1, 2, 3, 4, 5]));


