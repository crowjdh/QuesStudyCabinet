function circleOfNumbers(n, firstNumber) {
    if(n/2 > firstNumber) {
        return n/2 + firstNumber;
    } else {
        return firstNumber - n/2
    }
}
