function isBeautifulString(inputString) {
    let alphabetOccurence = Array.from(new Array(26), () => 0);
    
    for(let character of inputString) {
        alphabetOccurence[character.charCodeAt(0) - 97]++;    
    }
    
    for(let i=1 ; i<alphabetOccurence.length ; i++) {
        console.log(alphabetOccurence[i]);
        if(alphabetOccurence[i] > alphabetOccurence[i-1]) {
            return false;
        }
    }
    
    return true;
}

