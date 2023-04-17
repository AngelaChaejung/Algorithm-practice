// 대문자로 구성된 s문자열이 주어짐. AWS라는문자열을 를 모두 제거했다.
// 제거 후 보니까 prefix와 suffix는 연관이 있다. 최종 문자열을 반환하시오.
// 만일 최종문자열이 빈 값이라면 -1을 string으로 반환하시오.

function getFinalString(s) {
  let result = "";
  while (s.includes("AWS")) {
    s = s.replace("AWS", "");
  }
  s.length === 0 ? (result = -1) : (result = s);
  return result.toString();
}
console.log(getFinalString("AWAWSS"));
