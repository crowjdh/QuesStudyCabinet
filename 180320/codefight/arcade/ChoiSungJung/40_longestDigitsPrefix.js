longestDigitsPrefix = inputString => {
    let prefix = "";
    let stringArr = inputString.split("");
    for (let i = 0; i < stringArr.length; i++){
        if (!isNumber(stringArr[i])) {
            break;
        }
        prefix += stringArr[i];
    }
    return prefix;
}

isNumber = character => {
    return character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57;
}
