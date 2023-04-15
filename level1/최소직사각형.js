function solution(sizes) {
  //1. 배열의 모든 요소들을 [더 큰 수, 작은 수]의 구조로 바꾼다.
  const newArr = sizes.map((item) => {
    if (item[0] > item[1]) {
      return [item[0], item[1]];
    } else {
      return [item[1], item[0]];
    }
  });
  console.log(newArr);
  let width = 0;
  let height = 0;
  // 아래는 forEach메서드에 구조분해할당을 이용한 버전
  //   newArr.forEach(([width, height]) => {
  //     if (width > maxWidth) maxWidth = width;
  //     if (height > maxHeight) maxHeight = height;
  //   });
  newArr.map((item) => {
    if (item[0] > width) {
      width = item[0];
    }
    if (item[1] > height) {
      height = item[1];
    }
  });

  return width * height;
}
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

//다른사람들의 풀이ㅣㅣㅣㅣㅣㅣㅣ

function solution1(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
// 입력된 sizes 배열의 각 원소인 직사각형의 크기를 나타내는 [w, h] 배열을 받아, w가 h보다 작으면 [h, w]로 회전시킨 배열 rotated를 만듭니다. 이를 위해 Array.prototype.map() 메소드와 배열 비구조화 할당을 사용합니다.

// maxSize 변수를 [0, 0]으로 초기화합니다.

// rotated 배열에서 각 직사각형의 가로와 세로를 구하여, maxSize 배열의 첫 번째 원소에는 가장 큰 가로 길이를, 두 번째 원소에는 가장 큰 세로 길이를 할당합니다. 이를 위해 Array.prototype.forEach() 메소드와 비교문을 사용합니다.

// 가장 큰 가로 길이와 세로 길이를 곱하여 최종적인 결과값으로 반환합니다.
