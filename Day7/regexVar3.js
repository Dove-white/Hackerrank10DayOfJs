function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = new RegExp(/[0-9]+/gm);

  /*
   * Do not remove the return statement
   */
  return re;
}

("102, 1948948 and 1.3 and 4.5")
  .match(regexVar())
  .forEach((element) => console.log(element));

// Explanation
// Checking if their are integer (0 to 9) : [0-9]
// Don't return when first integer if found : g
// Continue Looping to the end : m
