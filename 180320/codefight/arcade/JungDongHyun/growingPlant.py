def growingPlant(up_mag, down_mag, desired_height):
    numerator = (desired_height - down_mag)
    denominator = (up_mag - down_mag)
    days = numerator / denominator + (1 if numerator % denominator > 0 else 0)
    return max(days, 1)
    
#     night_height = days * (up_mag - down_mag)
#     day_height = night_height + down_mag
#     
#     day_height = night_height + down_mag >= desired_height
#     days * (up_mag - down_mag) + down_mag >= desired_height
#     days * (up_mag - down_mag) >= desired_height - down_mag
#     days >= (desired_height - down_mag) / (up_mag - down_mag)
#     
#     min_days = ceil((desired_height - down_mag) / (up_mag - down_mag))
#     
