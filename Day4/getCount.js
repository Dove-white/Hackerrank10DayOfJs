/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let num = 0;
  for (let scy of objects) {
    if (scy.x === scy.y) {
      num += 1;
    } else num += 0;
  }

  return num;
}

console.log(
  getCount([
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ])
);
