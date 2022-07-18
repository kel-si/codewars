# def even_or_odd number
#   if number % 2 == 0
#     "Even"
#   else
#     "Odd"
#   end
# end

# # Refactor:
def even_or_odd number
  number % 2 == 0 ? "Even" : "Odd"
 end

puts even_or_odd 3
puts even_or_odd 10