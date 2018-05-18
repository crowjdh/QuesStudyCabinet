def lateRide(n):
    hours_past = n / 60
    minutes_past = n - (hours_past * 60)
    
    result = 0
    
    result += sum_digits(hours_past)
    result += sum_digits(minutes_past)
    
    return result


def sum_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n /= 10
    
    return total
