function maxMultiple(divisor, bound) {
    let maxMultiple = 0;
    for (let i=1 ; divisor*i<=bound ; i++) {
        maxMultiple = divisor * i;
    }
    
    return maxMultiple;
}

