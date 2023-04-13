// 초코바를 나눠먹으려한다. 초콜렛은 정사각형모양의 정수가 적힌 채 이루어져있다.
// 아래와 같은 방법으로 나눠먹으려한다.
// 구간의 길이가 론의 생년월과 일치하고,
// 정사각형의 정수의 합은 그의 생일과 같습니다.

// s = [2, 2, 1, 3, 2];
// d = 4;
// m = 2;

// ints[n]: 초콜릿의 각 정사각형에 있는 숫자들
// int d: 론의 생일
// int m: 론의 생년월

// 리스트 s가 주어진다.
// 앞에서 순서대로 m길이만큼 잘라서 더한 후 값이 d와 같으면 count를 1 더해준다.

// 1, 2, 1, 3, 2;

// m = 2;
// d = 3;

function birthday(s, d, m) {
  // d개씩 끊어서 합했을 때 m이 된다
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }
    if (sum === d) {
      count++;
    }
  }
  return count;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
// 해당 부분은 현재 검사 중인 초콜릿 조각의 시작 인덱스(i)부터 m개의 초콜릿 조각을 선택해서 각 초콜릿 조각의 값을 더해 sum 변수에 누적하는 부분입니다.

// for 루프에서 j 변수를 i로 초기화하고, j가 i + m보다 작을 때까지 j를 증가시키며 반복합니다. 이때 s[j]는 s 배열에서 인덱스 j에 위치한 초콜릿 조각의 값을 나타내며, 이 값을 sum 변수에 누적해주는 것입니다. 따라서 반복이 끝나면 sum 변수에는 선택한 초콜릿 조각의 합이 저장됩니다.
