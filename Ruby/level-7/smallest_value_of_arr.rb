## Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

def find_smallest(numbers,to_return)
  if to_return == 'value'
    return numbers.min
  end
  
  if to_return == 'index'
    return numbers.index numbers.min
  end
end