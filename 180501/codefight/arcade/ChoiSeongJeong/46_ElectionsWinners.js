electionsWinners = (votes, k) => {
    let count = 0;
    let max = Math.max(...votes);

    // Early return when k is 0
    if (k === 0) {
        // When two or more candidates have same votes with max, nobody can win
        return votes.filter(elem => elem === max).length > 1 ? 0 : 1 ;
    }

    // Increase count when the gap between each elem and max is smaller than k
    votes.forEach(elem => {
        if (elem + k > max) {
            count++;
        }
    });

    return count;
}
