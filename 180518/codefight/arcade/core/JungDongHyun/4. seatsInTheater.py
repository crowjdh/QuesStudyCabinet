def seatsInTheater(nCols, nRows, col, row):
    cols_left_including_here = (nCols - (col - 1))
    rows_behind = (nRows - row)
    return cols_left_including_here * rows_behind
