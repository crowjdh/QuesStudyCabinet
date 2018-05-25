def lineEncoding(s):
    cur_idx = 0
    occurances = []
    
    while cur_idx < len(s):
        first_non_recurring_index = find_first_non_recurring_index(s, cur_idx)
        occuring_count = first_non_recurring_index - cur_idx
        
        if occuring_count > 1:
            occurances.append(str(occuring_count))
        occurances.append(s[cur_idx])
        
        cur_idx = first_non_recurring_index
    
    return reduce(lambda lhs, rhs: lhs + rhs, occurances)


def find_first_non_recurring_index(s, start_idx):
    prev_char = s[start_idx]
    end_idx = start_idx
    
    while end_idx < len(s) and s[end_idx] == prev_char:
        end_idx += 1
    
    return end_idx

