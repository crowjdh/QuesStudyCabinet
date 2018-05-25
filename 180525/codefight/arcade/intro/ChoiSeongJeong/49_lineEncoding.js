lineEncoding = s => {
    let arr = s.split('');
    let count = 1;
    let countArr = [];
    for (let i = 0; i < arr.length;) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i, 1);
            count++;
        } else {
            countArr.push(count);
            count = 1;
            i++;
        }
    }
    let prefixArr = countArr.map(elem => elem === 1 ? "" : elem);
    for (let i = 0; i < arr.length; i ++) {
        arr.splice(i, 1, prefixArr[i].toString() + arr[i]);
    }
    return arr.join('');
}
