function solution(n) {
  let answer1 = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j === n) {
        answer1.push(i);
        answer1.push(j);
      }
    }
  }
  let answer = [...new Set(answer1)].sort();
  return answer;
}
