def digital_root n
  first_sum = n.digits.sum

  if first_sum < 10 
    first_sum
  end

  current_sum = first_sum.digits.sum
  current_sum > 9 ? current_sum.digits.sum : current_sum
  
end

puts digital_root 132189 # 6