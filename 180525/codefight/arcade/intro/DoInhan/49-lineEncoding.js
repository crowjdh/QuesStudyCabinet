function lineEncoding(s) {
    let occurence = 1, result = "";
    for (let i=0; i<s.length ; i++) {
        if (s[i] === s[i+1]) {
            occurence += 1;
        } else {
            if (occurence > 1) {
                result += occurence.toString() + s[i];
                occurence = 1;
            } else {
                result += s[i];
            }
        }
    }
    
    return result;
}

