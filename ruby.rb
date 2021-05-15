# Return the greatest value from an array of numbers.
# Input: [5, 17, -4, 20, 12]
# Output: 20


array = [5, 17, -4, 20, 12]
greatest = array[0]                 
i = 0                           
while i < array.length        
  if array[i] > greatest
    greatest = array[i]
  end
  i += 1
end
p greatest


