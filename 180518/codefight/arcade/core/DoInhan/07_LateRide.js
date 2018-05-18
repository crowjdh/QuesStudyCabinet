function lateRide(n) {
    let sumOfHh = parseInt(n / 60).toString().split('').reduce((sum, digit) => parseInt(sum) + parseInt(digit));
    let sumOfMm = (n % 60).toString().split('').reduce((sum, digit) => parseInt(sum) + parseInt(digit));
    
    return parseInt(sumOfHh) + parseInt(sumOfMm);
}

