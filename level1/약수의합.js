function solution(n) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i <= n; i++)
    for (let j = 0; j <= n; j++)
      if (i * j === n) {
        arr.push(i);
        arr.push(j);
      }
  let set = [...new Set(arr)];
  for (let a = 0; a < set.length; a++) {
    answer += set[a];
  }
  console.log(answer);
  return answer;
}
// 약수= 나누었을 때 나머지가 0이 되는 수.
solution(12);
