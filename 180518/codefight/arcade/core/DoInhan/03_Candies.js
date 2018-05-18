function candies(n, m) {    
    let pieces = 0;
    while (n*(pieces+1) <= m) {
        pieces++;
    }
    
    return n * pieces;
}

