ord_a = ord('a')


def cell_to_position(cell):
    return ord(cell[0]) - ord_a + 1, int(cell[1])


def cells_to_position(*cells):
    positions = []
    for cell in cells:
        positions.append(cell_to_position(cell))
    return positions


def are_in_diagonal_pos(lhs, rhs):
    return abs(lhs[0] - rhs[0]) == abs(lhs[1] - rhs[1])


def bishopAndPawn(bishop, pawn):
    pos_bishop, pos_pawn = cells_to_position(bishop, pawn)

    return are_in_diagonal_pos(pos_bishop, pos_pawn)

