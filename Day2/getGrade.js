function getGrade(score) {
  let grade;
  // Write your code here
  score > 29
    ? (grade = "A")
    : score > 24
    ? (grade = "B")
    : score > 19
    ? (grade = "C")
    : score > 14
    ? (grade = "D")
    : score > 9
    ? (grade = "E")
    : (grade = "F");

  return grade;
}

console.log(getGrade(20));
