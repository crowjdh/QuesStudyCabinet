def buildPalindrome(st):
    end_idx = len(st) * 2 - 1
    start_idx = end_idx / 2

    print "start_idx: %s, end_idx: %s" % (start_idx, end_idx)

    for i in range(start_idx, end_idx):
        lhs, rhs = calc_lhs_rhs(st, i)
        if not can_be_palindrome(st, lhs, rhs):
            continue
        skip_cnt = len(st) - 1 - rhs
        copy_from = lhs - skip_cnt - 1
        for copy_idx in range(copy_from, -1, -1):
            st += st[copy_idx]
        break
    
    return st


def calc_lhs_rhs(st, center_idx):
    is_odd = lambda n: n % 2 == 1

    lhs = center_idx / 2
    rhs = None
    
    if is_odd(center_idx):
        rhs = lhs + 1
    else:
        rhs = lhs + 1
        lhs = lhs - 1

    return lhs, rhs


def can_be_palindrome(st, lhs, rhs):
    print "%s / %s" % (lhs, rhs)
    for i in range(rhs, len(st)):
        if st[lhs] != st[rhs]:
            return False
        lhs -= 1
        rhs += 1

    return True
