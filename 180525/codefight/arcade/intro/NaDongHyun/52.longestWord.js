function longestWord(text) {
  let result = ""
  text.split(/[^a-zA-Z]/).forEach((value, index) => {
      if(result.length < value.length) {
          result = value;
      }
  });
      
  return result;
}
