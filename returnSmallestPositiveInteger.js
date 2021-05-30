// Write a function:

// def solution(A)

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].



function firstMissingPositive(nums) {
  var swap = function (i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  for (let i = 0; i < nums.length; i++) {
    while (0 < nums[i] && nums[i] - 1 < nums.length
      && nums[i] != i + 1
      && nums[i] != nums[nums[i] - 1]) {
      swap(i, nums[i] - 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 3]))