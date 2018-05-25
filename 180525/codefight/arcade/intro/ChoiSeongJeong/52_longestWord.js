longestWord = text => {
    return text.split(/[^a-zA-Z]+/)
        .filter(elem => elem)
        .reduce((pre, cur) => pre.length > cur.length ? pre : cur);
}
