function buildPalindrome(str) {
    let symmetyPoint = parseInt(str.length / 2);
    
    for (let i=symmetyPoint ; i<str.length ; i++) {
        let consecutiveMatchingCount = 0;
        for (let j=1 ; j<=(str.length-i) ; j++) {
            if (str[i+j] !== str[i-j]) {
                break;
            } else {
                consecutiveMatchingCount = j;
            }
        }
        console.log(i, str[i], consecutiveMatchingCount, str.length-i-1);
        
        if (consecutiveMatchingCount === (str.length-i-1)) {
            if (consecutiveMatchingCount === 0 && str[str.length-1] === str[str.length-2]) {
                consecutiveMatchingCount++;
            } else if (consecutiveMatchingCount === 0 && isPalindrome(str)) {
                return str;
            } else if (consecutiveMatchingCount === 0 && !isPalindrome(str)) {
                return str + str;
                // return str.splice(str.length-1, 1).reverse();
            }
            let palidromeStr = str;
            for(let k=0 ; k<i-consecutiveMatchingCount ; k++) {
                palidromeStr += str[i-consecutiveMatchingCount-k-1];
                
            }
            
            return palidromeStr;
        }
    }   
}

function isPalindrome(str) {
    for(let i=0 ; i<(str.length/2) ; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// ababab
// aba'b'ab => a === a? => consecutiveMatchingCount++
// abab'a'b => b === b? => consecutiveMatchingCount++ : 2
// 
// abab|abba
// 


