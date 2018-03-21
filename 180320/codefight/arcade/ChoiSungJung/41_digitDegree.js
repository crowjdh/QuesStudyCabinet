digitDegree = n => {
    // 91
    let num = String(n);
    // "91"
    let result = 0;
    while (num.length > 1) {
        num = num.split("")
        // ["9", "1"] // ["1", "0"]
            .reduce((pre, cur) => Number(pre) + Number(cur))
            // 9+ 1 = 10 // 1 + 0 = 1
            .toString();
            // "10" // "1"
        result++;
        // 1 // 2
    }
    return result;
}
