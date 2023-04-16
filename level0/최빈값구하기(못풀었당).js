function solution(array) {
  var answer = 0;

  const count = array.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  console.log(count);
  let valueArray = [];
  for (let key in count) {
    if (count[key] > answer) {
      answer = key;
    }
    valueArray.push(count[key]);
  }
  let max = valueArray.sort()[valueArray.length - 1];
  console.log(max);
  console.log(valueArray.indexOf(max));
  console.log(valueArray.lastIndexOf(max));
  if (valueArray.indexOf(max) !== valueArray.lastIndexOf(max)) {
    return -1;
  } else return answer * 1;
}
console.log(solution([1, 3, 3, 3, 3, 2, 5, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 6, 5, 4, 3, 3, 3]));
// 최빈값이 여러 개면 -1을 return 합니다.
