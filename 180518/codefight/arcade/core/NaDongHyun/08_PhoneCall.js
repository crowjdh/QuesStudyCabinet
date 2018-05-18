function phoneCall(min1, min2_10, min11, s) {
	if(s < min1) {
        return 0;
    }
    
    if(s === min1) {
        return 1;
    }
    
    if(s <= min1 + min2_10 * 9) {
        return Math.floor((s - min1) / min2_10) + 1;
    }
    
	return 10 + Math.floor(((s - min1) - (min2_10 * 9))/min11);
}
