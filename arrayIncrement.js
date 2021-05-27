// Write a function that accepts an array of numbers and returns an array with each number increased by 7.
// Example:
// Input: [1, 2, 3]
// Output: [8, 9, 10]


function increment(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 7);
  }
  return newArray;
}
console.log(increment([1, 2, 3]));