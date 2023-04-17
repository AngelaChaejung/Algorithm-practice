function maxLength(a, k) {
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += a[j];
      if (sum <= k) {
        maxLength = Math.max(maxLength, j - i + 1);
      } else {
        break;
      }
    }
  }
  console.log(maxLength);
  return maxLength;
}
maxLength([1, 2, 3], 3);
