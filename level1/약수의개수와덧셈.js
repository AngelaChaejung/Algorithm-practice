// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let answer = 0;

  let arr = []; //left부터 right까지 정수의 약수를 차례로 담을 array
  let count = []; //left부터 right까지 정수의 약수가 각각 몇개씩인지 담을 array
  for (let a = left; a <= right; a++) {
    //a가 13,14,..17 left부터 right까지 값이 하나씩 a에 대입되어 약수를 구할 것이다
    for (let i = 0; i <= a; i++)
      for (let j = 0; j <= a; j++)
        //a의 약수를 구하기 위해서 0부터 a까지 정수 중에 서로를 곱했을 때(i*j) a가 되는 정수가 a의 약수임.
        if (i * j === a) {
          arr.push(i);
          arr.push(j);
        }
    let set = [...new Set(arr)]; //중복 제거.
    console.log(a, ":", set);
    count.push(set.length); // 각각 약수가 몇개인지 count 배열에 push.
    console.log(set.length);
    arr = []; //배열 초기화.
  }
  console.log(count);

  // [13,14,15,16,17,18]
  for (let i = 0; i < count.length; i++) {
    //각각의 count요소들이 짝수인지 홀수인지 판별해서 더하거나 뺀다.
    if (count[i] % 2 === 0) {
      answer += left + i;
      console.log(i, answer);
    } else {
      answer -= left + i;
      console.log(i, answer);
    }
  }

  return answer;
}
console.log(solution(13, 17));

//수정된 코드

function solution_(left, right) {
  let answer = 0;
  for (let a = left; a <= right; a++) {
    let arr = []; //left부터 right까지 정수의 약수를 차례로 담을 array

    for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
        arr.push(i);
      }
    }
    //나누었을 때 나누어 떨어지는 수가 약수임.  a%i===0일 때 arr에 추가함으로서 간결화
    let set = [...new Set(arr)]; //중복 제거.
    // 각각 약수가 몇개인지 count 배열에 push. //count배열을 만들 필요 없이 바로 덧셈or뺄셈 연산
    // arr = []; //배열 초기화. //불필요해짐

    if (set.length % 2 === 0) {
      answer += a;
    } else {
      answer -= a;
    }
  } //   for문이 여기서 끝남

  return answer;
}
console.log(solution_(13, 17));
