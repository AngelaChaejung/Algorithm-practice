// 주어진 정수 배열에서 양수, 음수 및 0인 요소의 비율을 계산합니다
// 각 분수의 소수점 이하 6자리까지의 값을 새 줄에 print합니다.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let n = arr.length;
  let posiCount = 0;
  let negaCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posiCount += 1;
    } else if (arr[i] < 0) {
      negaCount += 1;
    } else {
      zeroCount += 1;
    }
  }
  let posiRatio = posiCount / n;
  let negaRatio = negaCount / n;
  let zeroRatio = zeroCount / n;
  console.log(posiRatio.toFixed(6));
  console.log(negaRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
