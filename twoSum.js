// look for two sums that adds to 10

// [2, 5, 3, 1, 0, 7, 11] -> true
// *        *

// [2, 5, 3, 1, 0, 11] -> false


//   [2, 5, 3, 1, 0, 7, 11]


// array.each do | number |
//   complimentary_number = 10 - number
//   if hash contains complimentary number
// return true
//   else
// hash[number] = true
// add number as a key to hash(true will be the arbitrary value)
// end



// { 2 => true, 5 => true, 3 => true, 1 => true, 0 => true, }


// O(N ^ 2)

// "If I could magically find any value in one step, could that make my algorithm faster?"


function twoSum(array) {
  let hash = {};
  array.forEach(function (number) {
    let complimentaryNumber = 10 - number;
    if (hash[complimentaryNumber]) {
      return true;
    }
    else {
      hash[number] = true;
    }
  })
  return false;
}
console.log(twoSum[2, 5, 3, 1, 0, 7, 11]);
console.log(twoSum[2, 5, 3, 1, 0, 11]);

