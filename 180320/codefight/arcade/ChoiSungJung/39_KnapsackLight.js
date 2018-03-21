knapsackLight = (value1, weight1, value2, weight2, maxW) => {
    let result = 0;
    if (maxW >= weight1 + weight2) {
        // Both
        result = value1 + value2;
    } else {
        if (maxW >= weight1) {
            if (maxW >= weight2) {
                // Worthy one
                result = Math.max(value1, value2);
            } else {
                // Can't take 2
                result = value1;
            }
        } else {
            if (maxW < weight2) {
                // Can't take both
                result = 0;
            } else {
                // Can't take 1
                result = value2;
            }
        }
    }
    return result;
}
