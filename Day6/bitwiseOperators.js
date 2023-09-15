function getMaxLessThanK(n, k) {
  let max = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let bw = i & j;

      bw < k && bw > max && (max = bw);
    }
  }

  return max;
}

console.log(getMaxLessThanK(5, 2));
