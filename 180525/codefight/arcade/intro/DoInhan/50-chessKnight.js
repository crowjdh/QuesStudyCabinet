function chessKnight(cell) {
    let canPerformMoves = 0, knightCoordinate = [cell.charCodeAt(0) - 96, parseInt(cell[1])];
    
    const availableCoordinateOffsets = [
        [2, 1], [2, -1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2]
    ]

    for (let coordinateOffset of availableCoordinateOffsets) {
        let knightXCoordinate = knightCoordinate[0] + coordinateOffset[0];
        let knightYCoordinate = knightCoordinate[1] + coordinateOffset[1];
        
        if ((0 < knightXCoordinate && knightXCoordinate <= 8) 
            && (0 < knightYCoordinate && knightYCoordinate <= 8)) {
            canPerformMoves++;
        }
    }
    
    return canPerformMoves;
}

