deleteDigit = n => {
    let arr = n.toString().split('');
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i, 1);
        let out = parseInt(arr.join(''));
        result = out > result ? out : result;
        arr = n.toString().split('');
    }
    return result;
}
