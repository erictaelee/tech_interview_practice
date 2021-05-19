# Take the sentence "What's the weather like today?" and reverse it
# Now, reverse the character order but keep the word order ("s'tahw eht rehtaew ...")

string = "What's the weather like today"
reversed_string = []
# p string.length
split = string.split("")

i = -1
while i > ((string.length + 1) * -1)
  reversed_string << split[i]
  # p reversed_string
  i -= 1
end

p reversed_string.join