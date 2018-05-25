def validTime(time):
    hours = int(time[0:2])
    minutes = int(time[3:6])
    has_valid_hour = hours in range(0, 24)
    has_valid_minute = minutes in range(0, 60)
    return has_valid_hour and has_valid_minute
