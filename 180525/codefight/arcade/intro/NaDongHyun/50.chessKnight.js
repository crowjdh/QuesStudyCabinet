function chessKnight(cell) {
    
  let result = 0;
  
  make8Way(cell).forEach((coordinates, index) => {
      if(coordinates[0] > 96) {
          if(coordinates[0] < 105) {
              if(coordinates[1] > 0) {
                  if(coordinates[1] < 9) {
                      result += 1;                    
                  }
              }
          }
      }
  })
  return result;
}

function make8Way(cell) {
  var cellArray = cell.split('').map((value, index) => {
      if(index === 0) {
          return value.charCodeAt();
      }
      return parseInt(value, 10);
  });
  
  return [
      [cellArray[0] - 2, cellArray[1] - 1], [cellArray[0] - 1, cellArray[1] - 2], 
      [cellArray[0] + 1, cellArray[1] - 2], [cellArray[0] + 2, cellArray[1] - 1], 
      [cellArray[0] + 2, cellArray[1] + 1], [cellArray[0] + 1, cellArray[1] + 2],
      [cellArray[0] - 1, cellArray[1] + 2], [cellArray[0] - 2, cellArray[1] + 1]
  ]
}
