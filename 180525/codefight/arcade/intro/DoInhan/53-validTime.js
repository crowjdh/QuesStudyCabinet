function validTime(time) {
    const hh = time.substr(0, 2);
    const mm = time.substr(time.length-2, 2);
    
    if ((0 <= hh && hh < 24) && (0 <= mm && mm < 60)) {
        return true;
    } else {
        return false;
    }
}

