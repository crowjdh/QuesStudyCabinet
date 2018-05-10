function isBeautifulString(inputString) {
  var a = inputString.split('');
  var bucket = [];
  for(var i = 0; i < 26; i ++) {
      bucket.push(0);
  }
  for(var i = 0; i < inputString.length; i++) {
      bucket[a[i].charCodeAt() - 97] += 1;
  }
  for(var i = 0; i < bucket.length - 1; i ++) {
      if(bucket[i] < bucket[i+1]) {
          return false;
      }
  }
  return true;
}
