def find_missing_letter arr
  (([*arr[0]..arr[arr.length - 1]]) - arr).join
end

puts find_missing_letter ["a","b","c","d","f"] # 'e'