def electionsWinners(votes, k):
    max_votes = None

    for vote in votes:
        if vote > max_votes:
            max_votes = vote

    possible_winner_cnt = 0
    max_vote_cnt = 0
    for vote in votes:
        if vote + k > max_votes:
            possible_winner_cnt += 1

        if vote == max_votes:
            max_vote_cnt += 1

    if k == 0:
        if max_vote_cnt > 1:
            return 0
        else:
            return 1

    return possible_winner_cnt
