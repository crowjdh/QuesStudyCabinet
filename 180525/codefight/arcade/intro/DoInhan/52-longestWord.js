function longestWord(text) {
    let longestWord = '';
    let words = text.split(' ');
    for (let word of words) {
        // let alphabetOnlyWord = word.replace(/\W/g, '');
        let consecutiveAlphabetWord = word;
        
        if (word.match(/\W/g)) {
            consecutiveAlphabetWord = word.slice(0, word.indexOf(word.match(/\W/g)[0]));
        }
    
        if (consecutiveAlphabetWord.length > longestWord.length) {
            longestWord = consecutiveAlphabetWord;
        }
    }

    return longestWord;
}

