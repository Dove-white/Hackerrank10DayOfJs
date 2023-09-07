/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = [];
    let consonants = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowel.push(s[i]);
        }
        else  consonants.push(s[i]);
    }

    console.log(vowel.join('\n'));
    console.log(consonants.join('\n'));
}

vowelsAndConsonants('javascriptloops');