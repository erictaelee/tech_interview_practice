// Input: [5, 17, -4, 20, 12]
// Output: 20



function greatestNum(array) {
  var i = 0;
  var greatestNum = array[0];
  while (i < array.length) {
    if (greatestNum < array[i]) {
      greatestNum = array[i]
    }
    i++;
  }

  return greatestNum;
}

console.log(greatestNum([50, 5, 17, -4, 20, 12,]));