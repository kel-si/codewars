def solution str
  # check length
  # if odd, push '_'
  if str.length % 2 != 0
    str += '_'
  end
  
  # separate by 2s into an array
  arr = []
  str2 = ""
  counter = 0

  str.each_char.with_index do |c, i| 
    str2 += c
    counter += 1

    if counter == 2
      arr.push str2
      counter = 0
      str2 = ""
    end
     
  end

 arr

end

puts solution("abcdefg") #["ab", "cd", "ef", "g_"]