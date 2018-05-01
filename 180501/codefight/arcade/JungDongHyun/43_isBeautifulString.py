def isBeautifulString(input_string):
    offset = ord('a')
    bucket = [0 for i in range(26)]
    for ch in input_string:
        bucket_idx = ord(ch) - offset
        bucket[bucket_idx] += 1

    prev_occ = bucket[0]
    is_beautiful = True
    for occ in bucket:
        if prev_occ < occ:
            is_beautiful = False
            break
        prev_occ = occ

    return is_beautiful
