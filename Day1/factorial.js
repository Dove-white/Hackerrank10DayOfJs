function factorial(an) {
    let n = an;
    
    for(let i = 1; i < an; i++) {
        n *= i;
    }
    
    return n;
}

console.log(factorial(4));