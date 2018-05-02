function electionsWinners(votes, k) {
    let winnersCount = 0;
    votes.sort((a, b) => a - b);

    if (k===0) {
        if (votes[votes.length-1] !== votes[votes.length-2]) {
            winnersCount++;
        }
    } else {
        for (let i=votes.length-1 ; i>=0 ; i--) {
            if (votes[i]+k > votes[votes.length-1]) {
                winnersCount++;
            } else {
                break;
            }
        }
    }
    // for (let i=0; i<votes.length ; i++) {
    //     if (votes[i]+k > Math.max(...votes)) {
    //         winnersCount++;
    //     }
    // }
    
    return winnersCount;
}

