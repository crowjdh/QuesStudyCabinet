def digitDegree(n)
   degree = 0
   
   while n.to_s.length != 1
      n = n.to_s.split('').inject(0) {|sum, x| sum + x.to_i}
      degree += 1
   end
   
   return degree
end

