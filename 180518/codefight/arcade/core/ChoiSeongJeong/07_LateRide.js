lateRide = n => {
    // hhmm
    let hh = Math.floor(n / 60);
    let mm = n % 60;
    let time = hh.toString() + mm.toString();
    return time.split("").reduce((pre, cur) => (pre * 1) + (cur * 1));
}
