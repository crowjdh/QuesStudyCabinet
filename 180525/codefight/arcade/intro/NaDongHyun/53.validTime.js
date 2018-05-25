function validTime(time) {
  const arr = time.split(':');
  let hour = arr[0];
  let minute = arr[1];
  
  if(hour[0] !== '0') {
      if(parseInt(hour, 10) > 23) {
          return false;
      }
  }
  
  if(minute[0] !== '0') {
      if(parseInt(minute, 10) > 59) {
          return false;
      }
  }
  
  return true
}
