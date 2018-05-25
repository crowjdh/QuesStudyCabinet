# 1 2
# 2 1
# 
# + +
# + -
# - +
# - -
from itertools import permutations

chess_board = [(x, y) for y in range(8) for x in range(8)]

def chessKnight(cell):
    knight_moves_scalars = [x for x in permutations([1, 2])]
    
    point = convert_cell_to_point(cell)
    print(point)
    moves = build_moves(knight_moves_scalars)
    
    moves_to_points = lambda move: (point[0] + move[0], point[1] + move[1])
    is_valid_point = lambda point: point in chess_board
    
    possible_points = map(moves_to_points, moves)
    print(possible_points)
    return len(filter(is_valid_point, possible_points))


def build_moves(scalars):
    mags = set([x for x in permutations('++--', 2)])
    scalars = map(lambda tup: [str(elem) for elem in tup], scalars)
    
    element_wise_concat = lambda elem: (int(elem[0][0] + elem[1][0]), int(elem[0][1] + elem[1][1]))
    mag_and_scalars = [(mag, scalar) for mag in mags for scalar in scalars]
    return map(element_wise_concat, mag_and_scalars)


def convert_cell_to_point(cell):
    x = ord(cell[0]) - ord('a')
    y = int(cell[1]) - 1
    return x, y
