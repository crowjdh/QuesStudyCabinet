function deleteDigit(n) {
    let strNumber = n.toString();
    let deletedNumber, candidateNumbers = [];
    
    for (let i=1 ; i<=strNumber.length ; i++) {
        deletedNumber = parseInt(strNumber.slice(0,i-1) + strNumber.slice(i, strNumber.length));
        candidateNumbers.push(deletedNumber);
    }
    
    return Math.max(...candidateNumbers);
    
}

