function firstDuplicate(a) {
    let bucket = Array(100000).fill(0);
 
    for (let element of a) {
        bucket[element]++;
        if (bucket[element] >= 2) {
            return element;
        }
    }
    
    return -1;
}
