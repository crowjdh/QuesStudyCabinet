def longestWord(text):
    idx = 0
    longest_word = ''
    text += ' '
    
    while True:
        start_idx, end_idx = find_word_range_from(text, idx)
        print("%d ~ %d" % (start_idx, end_idx))
        if start_idx < 0 or end_idx < 0:
            break
        word = text[start_idx:end_idx]
        if len(word) > len(longest_word):
            longest_word = word
        
        idx = end_idx
    
    return longest_word


def find_word_range_from(text, from_idx):
    is_uppercase_alphabet = lambda elem: ord(elem) in range(ord('A'), ord('Z') + 1)
    is_lowercase_alphabet = lambda elem: ord(elem) in range(ord('a'), ord('z') + 1)
    is_alphabet = lambda elem: is_uppercase_alphabet(elem) or is_lowercase_alphabet(elem)
    
    start_idx = -1
    end_idx = -1
    
    has_not_started = lambda: start_idx < 0
    has_not_ended = lambda: end_idx < 0
    
    for i in range(from_idx, len(text)):
        char = text[i]
        
        if has_not_started():
            start_idx = i if is_alphabet(char) else -1
        elif has_not_ended():
            if not is_alphabet(char):
                end_idx = i
                break
    
    return start_idx, end_idx
