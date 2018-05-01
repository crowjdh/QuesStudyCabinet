findEmailDomain = address => {
    let arr = address.split('');
    let domainStartIndex = arr.lastIndexOf("@") + 1;
    let domainLength = arr.length - domainStartIndex;
    return arr.splice(domainStartIndex, domainLength).join("");
}
