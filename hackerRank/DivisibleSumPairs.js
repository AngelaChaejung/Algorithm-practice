// 양의정수K와 정수의 배열이 주어집니다. i<j이며 ar[i]+ar[j]가 k로 나누어지는
// (i,j)들을 찾으세요

// ar = [1, 2, 3, 4, 5, 6];
// k = 5;
// n=ar의 length
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let answer = "";
  for (let j = 0; j < n; j++) {
    for (let i = j + 1; i <= n; i++) {
      if ((ar[i] + ar[j]) % k === 0) {
        answer++;
      }
    }
  }
  return answer;
}
divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]);

//let j=i+1은 첫번재 반복문에서 현재 인덱스 i의 다음 인덱스부터
// 두번째 반복문을 시작한다.

//j가i보다 큰 인덱스부터 검사하면서 중복되는 쌍을 제외할 수 잇다.
