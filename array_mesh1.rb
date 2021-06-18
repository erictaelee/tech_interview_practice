# Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]


# array1[i] + array2[i2]
# nested loop

def array_mesh(array1, array2)
  new_array = []
  i = 0
  while i < array1.length
    i2 = 0
    while i2 < array2.length
      new_array << array1[i] + array2[i2] 
      i2 += 1
    end
    i += 1
  end
  return new_array

end

p array_mesh(["a", "b", "c"], ["d", "e", "f", "g"])

