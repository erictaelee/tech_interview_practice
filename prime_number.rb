# Write a function that returns whether a given number is a prime number.



# prime number is only divisible only by itself and 1 
# 17 / 1 = 17 prime number
# 12 / 2 = 6 not a prime number




def prime_number(integer)
  i = 2
  if integer < 2
    return false
  end
  while i < integer
    if integer % i == 0
      return false
    end
    i += 1
  end
  return true
end

p prime_number(11) 
p prime_number(12)
p prime_number(19)
p prime_number(15)