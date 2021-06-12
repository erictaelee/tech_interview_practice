# Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.
# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}
# Output: 14
# Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).


# index = 0
# array = []
# create a new hash = {}
# if key item is called , return key value
# sum += key_value[i]
# while loop



def food_price(hash)
  sum = 0
  hash.each do | item, price |
  # // add prices to get sum
  sum += price
  end
  return sum
end

puts food_price({"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2})
puts food_price({"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5})

#  Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

# if array[0] => 2
# if array[0] + array[1] => 5



# def food_price(hash)
#   i = 0
#   array = []
#   new_hash = {}
#   sum = 0
#   while i < hash.length
#     if new_hash[i] 
#       sum += new_hash[i]
#     end
#     i += 1
#   end
#   return sum
# end

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}