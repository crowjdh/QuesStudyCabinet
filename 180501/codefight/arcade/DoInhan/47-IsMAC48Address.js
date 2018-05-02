function isMAC48Address(inputString) {
    return inputString.match(/^([A-F0-9]{2}-){5}([A-F0-9]{2})$/g) !== null ? true : false;
}
