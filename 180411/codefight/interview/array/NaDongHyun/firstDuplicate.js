function firstDuplicate(a) {
    var bucket = new Array(a.length);
    for(var i = 0; i < a.length; i ++) {
        if(bucket[a[i]-1] === 0) {
            return a[i]
        }
        bucket[a[i]-1] = 0;
    }
    return -1;
}