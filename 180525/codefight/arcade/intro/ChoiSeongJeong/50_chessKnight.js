chessKnight = cell => {
    let max = 8;
    // 8 3
    // 7 2
    // 6 1
    // 5 0
    // 4 0
    // 3 1
    // 2 2
    // 1 3 2 1 0 0 1 2 3
    //   A B C D E F G H
    const midValue = 4.5;
    let x = Math.floor(Math.abs(cell[0].charCodeAt() - 96 - midValue));
    let y = Math.floor(Math.abs(parseInt(cell[1]) - midValue));
    if (x > 1 && y <= 1) {
        if (x === 2) return max - 2;
        if (x === 3) return max - 4;
    }
    if (x <= 1 && y > 1) {
        if (y === 2) return max - 2;
        if (y === 3) return max - 4;
    }
    if (x > 1 && y > 1) {
        if (x * y === 4) return max - 4;
        if (x * y === 6) return 3;
        if (x * y === 9) return 2;
    }
    return max;
}
