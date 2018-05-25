def deleteDigit(n):
    n = str(n)
    maximum = 0
    for idx_to_remove in range(len(n)):
        modified_string = n[0:idx_to_remove] + n[idx_to_remove + 1:len(n)]
        result = int(modified_string)
        maximum = max(result, maximum)
    
    return maximum
