# Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

def is_divisible(n,x,y)
  n % x == 0 && n % y == 0
end