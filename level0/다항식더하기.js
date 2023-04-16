function solution(polynomial) {
  var answer = "";
  let x = 0;
  let num = 0;
  let arr = polynomial.split("+");
  console.log(arr);
  let xArray = arr.filter((e) => e.includes("x"));
  let numArray = arr.filter((e) => !e.includes("x"));
  console.log(xArray);
  console.log(numArray);
  for (i = 0; i < xArray.length; i++) {
    console.log(i);
    if (xArray[i].trim() === "x") {
      x += 1;
    } else {
      x += xArray[i].trim().replace("x", "") * 1;
      console.log(xArray[i].trim().replace("x", ""));
    }
  }
  for (i = 0; i < numArray.length; i++) {
    if (numArray.length !== 0) {
      console.log(numArray[i]);
      num += numArray[i].trim() * 1;
    }
  }
  if (x === 1) {
    x = "";
  }
  console.log(x);
  if (numArray.length === 0) return x + "x";
  else if (xArray.length === 0) return num.toString();
  else return x + "x" + " + " + num;
}
console.log(solution(" 7 + x"));
// 문제의 조건에 x의 계수가 1일 경우 생략한다는 부분이 있습니다!
// 만약 계수가 1일 시 1x가 아닌 x로 나타내야 합니다!
