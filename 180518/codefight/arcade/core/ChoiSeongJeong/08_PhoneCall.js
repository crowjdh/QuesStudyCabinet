phoneCall = (min1, min2_10, min11, s) => {
    let result = 0;
    for (let m = 1; s > 0; m++) {
        if (m == 1) {
            s -= min1;
        } else if (m > 1 && m <= 10) {
            s -= min2_10;
        } else {
            s -= min11;
        }
        result++;
        if (s < 0) {
            result --;
        }
    }
    return result;
}
