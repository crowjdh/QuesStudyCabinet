function buildPalindrome(st) {
  for(var i = 1; i < 20; i ++) {
      var string = st;
      if(st.length < i *2) {
          var a = string.slice(0, string.length - i);
          var array = a.split('');
          array.reverse();
          console.log(array);
          var result = string +  array.join('');
          console.log(result);
          var reverseResult = result.split('');
          reverseResult.reverse();
          
          if(result === reverseResult.join('')) {
              return canBeMoreShorter(result);
          }
      }
  }
}

function canBeMoreShorter(string) {
  if(string.length%2 === 1) {
      var middle = Math.floor(string.length/2);
      if(string[middle] === string[middle-1]) {
          if(string[middle] === string[middle+1]) {
              return string.slice(0, middle-1) + string[middle] + string.slice(middle+1, string.length);
          }
      }
  }
  return string
}
