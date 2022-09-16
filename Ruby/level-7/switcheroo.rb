# Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

# Example:

# 'acb' --> 'bca'
# 'aabacbaa' --> 'bbabcabb'



def switcheroo(x) 
  # tr creates a copy of a string
  a = x.tr('a', '🎀');
  b = a.tr('b', 'a');
  c = b.tr('🎀', 'b');
end