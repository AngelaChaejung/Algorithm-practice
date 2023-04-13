function simpleArraySum(ar) {
  let answer = 0;
  for (let i = 0; i < ar.length; i++) {
    answer += ar[i];
  }
  console.log(answer);
  return answer;
}
