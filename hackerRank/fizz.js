// n숫자가 주어집니다. 1에서 n까지의 정수i.
// i가 3과 5의 배수라면 FizzBuzz를 출력하시오
// i가 3의 배수이지만 5의 배수는 아니ㅣ라면 Fizz를 출력
// i가 5의 배수이고 3의 배수는 아니라면 Buzz를 출력
// i는 3과5의 배수가 모두 아니라면 그냥 i의 값을 출력.

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else if (i % 5 !== 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
// console.log(fizzBuzz(15));
fizzBuzz(15);
