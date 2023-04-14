function solution(n) {
  var answer = 0;
  for (i = 0; i < 100000; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}
console.log(solution(10));

//다른사람의 풀이
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
//return문이 있기 때문에, if문이 참이 되는 순간
//while문을 빠져나오고 x값을 반환하며 함수가 종료

function solution(n) {
  let i = 0;
  while (i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
