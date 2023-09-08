function isPositive(a) {
  let result = "YES";

  if (a < 0) {
    throw { message: "Negative Error" };
  } else if (a === 0) {
    throw { message: "Zero Error" };
  }

  return result;
}

function main(n) {
  for (let num of n) {
    try {
      console.log(isPositive(num));
    } catch (num) {
      console.log(num.message);
    }
  }
}

main([2, 0, 4]);
