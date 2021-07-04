# Take the sentence "What's the weather like today?" and reverse it
# Now, reverse the character order but keep the word order ("s'tahw eht rehtaew ...")

# string = "What's the weather like today"

# def reversed_string(string)
#   reversed_string = []
#   split = string.split("")
#   i = -1
#   while i > ((string.length + 1) * -1)
#     reversed_string << split[i]
#     i -= 1
#   end
#   return reversed_string.join
# end
# p reversed_string("What's the weather like today")



# Take the sentence "What's the weather like today?" and reverse it
# Now, reverse the character order but keep the word order ("s'tahw eht rehtaew ...")

# string = "What's the weather like today"


def reversed_string(string)
  i = string.length - 1
  result = ""
  while i >= 0
    result += string[i]
    i -= 1
  end
  return result
end

p reversed_string("What's the weather like today")