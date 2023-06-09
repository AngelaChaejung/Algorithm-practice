function solution(s) {
  let sorted = [...s].sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    if (a === b) return 0;
  });

  return sorted.join("");
}
console.log(solution("Zbcdefg"));

//다른사람풀이
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}

//해당 코드는 sort() 메소드의 인자로 전달되는 비교 함수입니다. sort() 메소드는 기본적으로 유니코드 문자열 코드 포인트 순서로 정렬을 합니다. 하지만 정렬 순서를 변경하고자 할 때에는 비교 함수를 사용하여 원하는 순서로 정렬할 수 있습니다.

// 비교 함수는 두 개의 인자를 받아 비교를 수행하고, 그 결과를 반환해야 합니다. 인자 a와 b는 비교 대상인 두 개의 원소입니다. 이 함수에서는 a와 b를 비교하여 작은 것을 먼저 오게끔 하기 위해 삼항 연산자를 사용합니다.

// 만약 a가 b보다 작을 경우(즉, a가 b 앞에 오길 원하는 경우) a<b가 참이 되므로 1을 반환합니다. 반대로 a가 b보다 크거나 같은 경우(즉, a가 b 뒤에 오길 원하는 경우) -1을 반환합니다.
xArray;
// 이렇게 반환된 값을 기반으로 sort() 메소드는 원소들을 정렬합니다. 반환 값이 1인 경우 sort() 메소드는 a와 b의 위치를 서로 바꿔 정렬합니다. 반환 값이 -1인 경우 정렬하지 않고 그대로 둡니다.
