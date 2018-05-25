function deleteDigit(n) {
  var range = [];
  for(let i = 0; i < (n+"").length; i ++) {
      var string = (n+"");
      if(i !== string.length) {
          range.push(parseInt(string.substring(0,i) + string.substring(i+1, string.length), 10));
      }
  }
  return Math.max(...range);
}
