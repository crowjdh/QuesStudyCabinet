addTwoDigits = n => {
    return n.toString().split("").reduce((pre, cur) => pre * 1 + cur * 1);
}
