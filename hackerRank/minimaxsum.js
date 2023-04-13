function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;
  let sortedArr = arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  for (i = 0; i < 4; i++) {
    minSum += sortedArr[i];
    6;
    for (i = 1; i <= 4; i++) {
      maxSum += sortedArr[i];
    }
    return console.log(minSum + " " + maxSum);
  }
}
