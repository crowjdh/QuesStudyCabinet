firstDuplicate = a => {
    let bucket = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        if (bucket[a[i] - 1] === 1) {
            return a[i];
        }
        bucket[a[i] - 1] = 1;
    }
    return -1;
}
