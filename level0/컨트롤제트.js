function solution(s) {
  var answer = 0;
  let arr = s.split(" ");
  console.log(arr);
  for (let i = 0; i < s.length; i++) {
    answer += arr[i] * 1;
    if (arr[i] === "Z") {
      answer -= arr[i - 1] * 1;
    }
  }
  return answer;
}

function solution2(s) {
    const arr = s.split(" ");
    const sum = arr.filter(a => a !== 'Z').reduce((acc, curr) => acc + curr);
    for(let i = 0; i < arr.length; i++) {
        if (i === 'Z') {
            sum -= arr[i-1];
        }
    }
    return sum;
}
console.log(solution("10 Z 20 Z 1"));
