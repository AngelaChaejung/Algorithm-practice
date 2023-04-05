// 사각의 matrix가 주어지는데, 대각선의 합 간의 차이를 계산해서 그 절댓값을 return.
// 1 2 3
// 4 5 6
// 9 8 9
// 왼->오 1+5+9=15
// 오->왼 3+5+9=17
// 이 둘의 차를 구함.

function diagonalDifference(arr) {
  let leftToRight = arr[1] + arr[5] + arr[9];
  let rightToLeft = arr[3] + arr[5] + arr[7];
  let output = leftToRight - rightToLeft;
  console.log(output);
  if (output < 0) {
    output *= -1;
    console.log("0보다작다");
  } else {
    output *= 1;
  }
  return parseInt(output);
}
console.log(diagonalDifference([3, 11, 2, 4, 4, 5, 6, 10, 8, -12]));
