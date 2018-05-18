function lateRide(n) {
    let result = 0;
	const h = Math.floor(n/60) + "";
    const m = n%60 + "";
    for(var i = 0; i < h.length; i++) {
    	result += parseInt(h[i], 10);
    }
    
    for(var i = 0; i < m.length; i++) {
    	result += parseInt(m[i], 10);
    }
    
    return result;
}
