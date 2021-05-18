# Given an array of numbers, return a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]


def double_array(array)
  i = 0
  double_array = []
  while i < array.length
    double_array << array[i] * 2
    i += 1
  end
  return double_array
end

p double_array([4, 2, 5, 99, -4])