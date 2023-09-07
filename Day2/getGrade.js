function getGrade(score) {
    let grade;
    // Write your code here
    if(score <= 30) {grade = 'A'}
    if(score <= 25) {grade = 'B'}
    if(score <= 20) {grade = 'C'}
    if(score <= 15) {grade = 'D'}
    if(score <= 10) {grade = 'E'}
    if(score <= 5) {grade = 'F'}
    
    return grade;
}

console.log(getGrade(20));