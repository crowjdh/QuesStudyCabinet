isMAC48Address = inputString => {
    let stringArr = inputString.split('-');

    // Early return when bad shape
    if (!stringArr.every(elem => elem.length === 2) || stringArr.length != 6) {
        return false;
    };

    // Check each character with ascii code range
    return stringArr.join('').split('')
        .map(elem => elem.charCodeAt())
        .every(elem => elem >= 65 && elem <= 70 || elem >= 48 && elem <= 57);
}
