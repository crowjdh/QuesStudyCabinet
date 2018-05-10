function electionsWinners(votes, k) {
  var result = 0;
  var sum = votes.map((value, index) => {
      return value + k;
  });
  
  var max = Math.max(...votes);
  
  if(k === 0) {
      if(sum.indexOf(max) === sum.lastIndexOf(max)) {
          return 1;
      }
  }
  
  for(var i = 0; i < sum.length; i++) {
      if(sum[i] > max) {
          result ++;
      }
  }
  
  return result
}
