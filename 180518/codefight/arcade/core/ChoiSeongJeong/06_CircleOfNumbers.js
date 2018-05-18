circleOfNumbers = (n, firstNumber) => {
    let result = (n/2) + firstNumber;
    return result < n ? result : result - n;
}
