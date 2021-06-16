# Given a string, find the most commonly occurring letter.

# Input: “peter piper picked a peck of pickled peppers”
# Output: “p”


def frequent_letter(string)
  letter_counts = {}
  index = 0
  most_frequent_letter = ""
  most_frequent_count = 0

  while index < string.length
    if letter_counts[string[index]]
    letter_counts[string[index]] += 1
  else
    letter_counts[string[index]] = 1
    end

    if letter_counts[string[index]] > most_frequent_count
      most_frequent_count = letter_counts[string[index]]
      most_frequent_letter = string[index]
    end

    index += 1
  end
  return most_frequent_letter
end
p frequent_letter("peter piper picked a peck of pickled peppers")