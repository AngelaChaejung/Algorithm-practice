// 양말더미가있다. 양말은 색깔별로 짝이 맞아야한다. 각 양말의 색깔을 나타내는 정수의 배열이 주어진다.
//몇쌍의 양말이 매칭되는지 결정하시오

n = 7;
ar = [1, 2, 1, 2, 1, 3, 2];

function sockMerchant(n, ar) {
  let answer = 0;
  let dupArr = [];
  for (let i = 0; i < n; i++) {
    if (ar.slice(0, i).includes(ar[i])) {
      dupArr.push(ar[i]);
    }
  }
  console.log("dupArr:", dupArr);
  const count = dupArr.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  console.log(count);
  for (let key in count) {
    console.log("key:", key);
    console.log(Math.floor(count[key] / 2));
    answer += Math.floor((count[key] + 1) / 2); // 각 키에 1씩 더해줘야 맞음. 왜냐하면 dupArr에서 하나씩 빠져있음.
  }
  return answer;
}
//chatGPT answer
// function sockMerchant(n, ar) {
//   let answer = 0;
//   const count = ar.reduce((acc, cur) => {
//     if (acc[cur]) {
//       acc[cur]++;
//     } else {
//       acc[cur] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(count);
//   for (let key in count) {
//     answer += Math.floor(count[key] / 2);
//   }
//   return answer;
// }

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
