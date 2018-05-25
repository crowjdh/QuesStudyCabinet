validTime = time => {
    let hh = parseInt(time.slice(0,2));
    let mm = parseInt(time.slice(3,5));
    return hh >= 0 && hh < 24
        && mm >= 0 && mm < 60;
}
