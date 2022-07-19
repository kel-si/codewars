def reduce fraction
  gcd = fraction[0].gcd fraction[1]
  [fraction[0] / gcd, fraction[1] / gcd]
end


puts reduce [4, 10] #[2, 5]
puts reduce [36, 18] #[2, 1]
puts reduce [1000, 1] #[1000, 1]
