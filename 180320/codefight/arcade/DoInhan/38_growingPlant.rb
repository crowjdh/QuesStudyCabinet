def growingPlant(upSpeed, downSpeed, desiredHeight)
    currentHeight = 0
    day = 1
    
    while currentHeight < desiredHeight
        currentHeight = upSpeed * day - downSpeed * (day - 1)
        day += 1
    end
    
    return day - 1
end
