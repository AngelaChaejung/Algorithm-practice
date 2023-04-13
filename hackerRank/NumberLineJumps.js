function kangaroo(x1, v1, x2, v2) {
  // 두 캥거루의 위치가 같은 경우
  if (x1 === x2) {
    return "YES";
  }

  // 두 캥거루가 같은 속도로 이동하는 경우
  if (v1 === v2) {
    return "NO";
  }

  // 두 캥거루가 서로 멀리 떨어져 있으면 만날 수 없음
  if ((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2)) {
    return "NO";
  }

  // 두 캥거루가 동시에 도착하는 위치 계산
  let t = (x1 - x2) / (v2 - v1);

  //두 캥거루가 한 위치에서 만나는 것은 x1 + v1 * t = x2 + v2 * t  와 같다.
  // 즉, t = (x1 - x2) / (v2 - v1);
  // 위 식을 통해 캥거루가 만날 때 까지의 시간을 구하고, 그 시간이 자연수이면 true
  // t가 자연수인지 여부를 체크하기 위해 Number.isInteger() 메소드를 사용
  if (Number.isInteger(t) && t >= 0) {
    return "YES";
  } else {
    return "NO";
  }
}
