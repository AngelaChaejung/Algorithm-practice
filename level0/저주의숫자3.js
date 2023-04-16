// 정수n이주어짐 n을 해당 방법으로 바꿔 return하도록
function solution(n) {
  var answer = 0;
  let normalNumber = [];
  let noThree = [];
  for (let i = 1; i <= 300; i++) {
    normalNumber.push(i);
    if (i % 3 === 0 || i.toString().split("").includes("3")) {
      null;
    } else {
      noThree.push(i);
    }
  }
  console.log(noThree);

  return noThree[n - 1];
}
solution(10);
