# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.



def longest_common_prefix(array)
  new_string = ""
  i = 0
  while i < array.length 
    i2 = 0
    while i2 < array[i].length
      if array[i][i2] == array[i][i2]
        new_string = array[i][i2]
      else
        i2 += 1
      end
      i2 += 1
    end
    i += 1
  end
  return new_string
end

p longest_common_prefix(["flower","flow","flight"])




# new_string = ""

# flower and flow
# find the common prefix

# i = 0
# flower = string1
# i
# flow = string2
# i

# if string1[i] == string2[i]
#   new_string = new_string + string1[i]
# else
#   i+=1 
