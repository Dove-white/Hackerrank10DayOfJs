/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let obj = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }

    return obj;
}


function main(a, b) {
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

main(4,5);