function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);

  /*
   * Do not remove the return statement
   */
  return re;
}

console.log(regexVar().test('Dr.GGG'));

// Explanation
// the beginning of the line of data: ^
// the end of the line of data: $
// this is identifying only the character not the white space: \s
// this is checking if they are lower case or upper case: ?[a-z|A-Z]  
// the container that is looping to check if there are the same string: (Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)
