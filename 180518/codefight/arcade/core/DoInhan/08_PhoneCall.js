function phoneCall(min1, min2_10, min11, s) {
    let minute = 0, costPerMinute = min1, totalCost = 0;
        
    while (totalCost + costPerMinute <= s) {
        if (minute < 1) {
            costPerMinute = min1;
        } else if (minute < 10) {
            costPerMinute = min2_10;
        } else {
            costPerMinute = min11;
        }
        totalCost += costPerMinute;
        minute++;
    }
    
    return minute;
}

