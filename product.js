
// Given an array of numbers, return the product of all the numbers.

// Input: [1, 2, 3, 4]
// Output: 24

// Explanation: (1 x 2 x 3 x 4) = 24




function product(array) {
  productSoFar = array[0];
  for (let i = 0; i < array.length; i++) {
    productSoFar = productSoFar * array[i];
  }
  return productSoFar;
}

console.log(product([1, 2, 3, 4]));



