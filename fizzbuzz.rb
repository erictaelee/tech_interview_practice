# Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".




def fizzbuzz(n)
current_number = 1 
  while current_number <= n
    if current_number % 15 == 0
      p "FIZZBUZZ" 
    elsif current_number % 3 == 0
      p "FIZZ"
    elsif current_number % 5 == 0
      p "BUZZ"
    end
    current_number += 1
  end
  return current_number
end

p fizzbuzz(15)
