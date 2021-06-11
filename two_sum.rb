# function twoSum(array) {
#   let hash = {};
#   array.forEach(function (number) {
#     let complimentaryNumber = 10 - number;
#     if (hash[complimentaryNumber]) {
#       return true;
#     }
#     else {
#       hash[number] = true;
#     }
#   })
#   return false;
# }
# console.log(twoSum[[2, 5, 3, 1, 0, 7, 11]])
# console.log(twoSum[[2, 5, 3, 1, 0, 11]])



def two_sum(array)
  hash = {}
  array.each do |number|
    complimentary_number = 10 - number
    if hash[complimentary_number]
      return true
    else
      hash[number] = true;  
    end
  end
  return false
end

puts two_sum([2, 5, 3, 1, 0, 7, 11])
puts two_sum([2, 5, 3, 1, 0, 11])