function regexVar() {
    /*
     * Declare a RegExp(Regular Expression to evaluate) object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = new RegExp(/^([aeiou]).*\1$/);

    /*
     * Do not remove the return statement
     */
    return re;
}

console.log(regexVar().test('aba'));

// Explanation
// the beginning of the line of data: ^
// the end of the line of data: $
// the container of the input(the data you texted): .*\1
// the container that is looping to check if there are vowels: ([aeiou])

// Note: the output should be true, because the data beginning and the data ending is the same vowel.
