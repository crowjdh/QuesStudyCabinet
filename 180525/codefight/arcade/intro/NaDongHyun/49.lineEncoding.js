function lineEncoding(s) {
  let keys = [];
  let values = new Array(s.length);
  values.fill(0, 0, s.length);
  
  for(let i = 0; i < s.length; i++) {
      if(i === 0) {
          keys.push(s[0]);
          values[0] = 1;
      } else if(s[i-1] === s[i]) {
          values[keys.length - 1] += 1;
      } else {
          keys.push(s[i]);
          values[keys.length - 1] = 1;
      }
  }
  
  let result = "";
  
  for(let i = 0; i < keys.length; i ++) {
      if(values[i] !== 1) {
          result += values[i]
      }
      
      result += keys[i]
  }
  
  return result;
}
