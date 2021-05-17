# Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]


def new_array(array)
  new_array = []
  i = 0
  while i < array.length
    if array[i] < 100
      new_array << array[i]
    end
    i += 1
  end
  return new_array
end
p new_array([99, 101, 88, 4, 2000, 50])