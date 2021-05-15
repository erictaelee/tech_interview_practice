// Return the greatest value from an array of numbers.
// Input: [5, 17, -4, 20, 12]
// Output: 20

var array = [5, 17, -4, 20, 12];
var i = 0;
var greatestNumber = Math.min.apply(null, array);

while (i < array.length) {
  if (greatestNumber < array[i]) {
    greatestNumber = array[i];
  }
  i++;
}
console.log(greatestNumber)

// OR

var array = [5, 17, -4, 20, 12];
var i = 0;
var greatestNumber = array[0];

while (i < array.length) {
  if (greatestNumber < array[i]) {
    greatestNumber = array[i];
  }
  i++;
}
console.log(greatestNumber)