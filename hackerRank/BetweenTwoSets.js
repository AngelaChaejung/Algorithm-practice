function getTotalX(a, b) {
  // 1. a의 최대공약수를 구한다. (A와 B의 공통된 약수 중에 가장 큰 정수)
  // 2. b의 최소공배수를 구한다. ( 공통인 배수 중 가장 작은 수)

  // 유클리드 호제법의 기본 원리는
  // num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.
  //   r이 0이라면, 그 때의 num2가 최대공약수
  //   num1=24, num2=16을 가정하면, GCD(24, 16) = GCD(16, 8) = GCD(8, 0)
  //   GCD = 8 8이 최대공약수

  function getTotalX(a, b) {
    const gcd = (a, b) => {
      if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    };
    const lcm = (a, b) => {
      return (a * b) / gcd(a, b);
    };
    let gcdValue = a.reduce(gcd);
    let lcmValue = b.reduce(lcm);
    let count = 0;
    for (let i = lcmValue; i <= gcdValue; i += lcmValue) {
      let isFactor = true;
      for (let j = 0; j < a.length; j++) {
        if (gcd(i, a[j]) !== a[j]) {
          isFactor = false;
          break;
        }
      }
      if (isFactor) {
        count++;
      }
    }
    return count
  



function getTotalX1(a, b) {
  //1.최대공약수 구하는 식을 먼저 세운다.
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  //   2.첫번째 배열a의 모든 요소의 최소공배수를 구한다.
  let lcm = a.reduce((prev, curr) => {
    return (prev * curr) / gcd(prev, curr); // 최소공배수는 두 수의 곱을 최대공약수로 나눈 값으로 구할 수 있다
  }, 1);
  //reduce()함수를 이용해 배열 a의 모든 요소를 순회하며 prev와 curr에 각각 이전 요소의 초소공배수와 현재 요소를 받는다
  // 초기값1을 주어 함수가 처음 호출될 때 prev에 1이 들어감

  let count = 0;

  for (let i = lcm, j = 1; i <= b[0]; i = lcm * j) {
    if (b.every((x) => x % i === 0)) { 
        // b 배열의 모든 요소 x에 대해 i로 나누어 떨어지는지 확인합니다. 
        // every 메소드는 배열의 모든 요소가 조건을 만족할 때만 true를 반환합니다.
      count++;
    }
    j++;
  }
  return count;
}
