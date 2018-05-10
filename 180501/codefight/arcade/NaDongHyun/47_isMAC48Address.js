function isMAC48Address(inputString) {
  var array = inputString.split('-');
  if(array.length !== 6) {
      return false;
  }

  for(var i = 0; i < array.length; i++) {
      if(array[i].length !== 2) {
          return false;
      }
      if(!array[i].match(/([0-9]|[A-F]){2}/)) {
          return false;
      }
  }
  return true
}
