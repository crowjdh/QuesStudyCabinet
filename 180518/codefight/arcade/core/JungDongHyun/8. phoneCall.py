def phoneCall(min1, min2_10, min11, s):
    cents_left = s
    total_spent_minutes = 0
    pricing_policies = [(min1, 1), (min2_10, 9), (min11, None)]
    
    for unit_cost, counter in pricing_policies:
        cents_left, spent_minutes, is_interrupted = make_call(cents_left, unit_cost, counter)
        total_spent_minutes += spent_minutes
        
        if is_interrupted:
            break
    
    return total_spent_minutes


def make_call(cents_left, unit_cost, remaining_counter):
    """Make a phone call and 

    Args:
        cents_left(int): Cents left for phone call.
        unit_cost(int): Cents required for one minute long phone call.
        remaining_counter(int): Specifies minutes you can call for given unit cost. Pass None to prevent limiting.
    """
    spent = 0
    spent_minutes = 0
    ignore_remaining_counter = remaining_counter is None
    while cents_left - unit_cost >= 0 and (ignore_remaining_counter or remaining_counter > 0):
        spent += unit_cost
        cents_left -= unit_cost
        spent_minutes += 1
        if not ignore_remaining_counter:
            remaining_counter -= 1
    
    is_interrupted = not ignore_remaining_counter and remaining_counter > 0
    
    return (cents_left, spent_minutes, is_interrupted)
