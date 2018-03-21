bishopAndPawn = (bishop, pawn) => {
    // Early return when on different color
    if (isOnDark(bishop) != isOnDark(pawn)) return false;
    // Return true when slope is 1 or -1
    if (Math.abs(getSlope(bishop, pawn)) === 1) {
        return true;
    } else {
        return false;
    }
}

isOnDark = position => {
    return (position.charCodeAt(0) + Number(position[1])) & 2 == 0;
}

getSlope = (bishop, pawn) => {
    return deltaY(bishop, pawn) / deltaX(bishop, pawn);
}

deltaX = (x1, x2) => {
    return x1.charCodeAt(0) - x2.charCodeAt(0);
}

deltaY = (y1, y2) => {
    return Number(y1[1]) - Number(y2[1]);
}
