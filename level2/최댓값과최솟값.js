function solution(s) {
  var answer = "";
  let array = s.split(" ");
  let positiveArr = array
    .map((e) => (!e.includes("-") ? e : null))
    .filter((e) => e !== null)
    .sort();
  console.log("p", positiveArr);
  let negativArr = array
    .map((e) => (e.includes("-") ? e : null))
    .filter((e) => e !== null)
    .sort()
    .reverse();
  console.log("n", negativArr);
  let arr = [];
  if (negativArr.length !== 0) {
    arr.push(...negativArr);
  }
  if (positiveArr.length !== 0) {
    arr.push(...positiveArr);
  }

  console.log("arr", arr);

  let min = arr[0];
  let max = arr.reverse()[0];

  console.log(min, max);
  answer = min + " " + max;
  return answer;
}
// solution("0 0 0 3 0 9 8");
// function solution(num) {
//   let arr = num.split(" ");
//   let numArr = arr.map((e) => parseInt(e)).sort((a, b) => a - b);

//   return `${numArr[0].toString()} ${numArr[numArr.length - 1].toString()}`;
// }
