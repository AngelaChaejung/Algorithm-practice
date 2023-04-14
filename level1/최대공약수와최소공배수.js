function solution(n, m) {
  const gcd = (n, m) => {
    if (m === 0) {
      return n;
    } else {
      return gcd(m, n % m); //재귀 함수는 함수 내에서 자기 자신을 다시 호출하는 함수
    }
  };
  const lcm = (n, m) => {
    return (n * m) / gcd(n, m);
    //최소공배수는 두 수의 곱을 최대공약수로 나눈 값으로 구할 수 있다
  };
  let a = gcd(n, m);
  let b = lcm(n, m);
  let answer = [a, b]; //첫번재자리에 최대공약수, 두번째에 최소공배수

  return answer;
}
console.log(solution(2, 5));
