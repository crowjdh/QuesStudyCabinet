def bishopAndPawn(bishop, pawn)
    bishop_coordinate = bishop.split('')
    pawn_coordinate = pawn.split('')
    
    if (bishop_coordinate[0].ord - pawn_coordinate[0].ord).abs == (bishop_coordinate[1].to_i - pawn_coordinate[1].to_i).abs
        return true
    else
        return false
    end
end
