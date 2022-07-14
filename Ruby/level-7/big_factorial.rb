def factorial n
  if n == 0
    return 1
  end

  if n < 0
    return nil
  end
  

  x = n - 1

 while x > 0 do
  n *= x
  x -= 1
 end

 return n
end

puts factorial 0 # 1
puts factorial 4 # 24
puts factorial 5 # 120
puts factorial 100 # 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000