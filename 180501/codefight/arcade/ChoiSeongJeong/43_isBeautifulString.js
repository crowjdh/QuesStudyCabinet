isBeautifulString = inputString => {
    let arr = new Array(26).fill(0);
    inputString.split("").forEach(elem => arr[elem.charCodeAt(0) - 97]++);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i+1]) {
            return false;
        }
    }
    return true;
}
