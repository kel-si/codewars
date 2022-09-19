def square_digits num
  sep_nums = num.to_s.split ''
  squared = ""
  sep_nums.each {|n| squared += (n.to_i ** 2).to_s}
  squared.to_i
end