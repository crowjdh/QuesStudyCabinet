buildPalindrome = st => {
    let stArr = st.split('');
    while (stArr.length <= 20) {
        stArr.push('');
    }
    for (let i = 0; !isPalindrome(stArr.slice().join('')); i++) {
        stArr[stArr.length - 1 - i] = stArr[i];
    }
    return stArr.join('');
}

isPalindrome = string => {
    return string === string.split('').reverse().join('');
}
