function getCombination(elements, pick) {
  // 기저사례: 골라야 하는 길이가 1이면 각 원소가 조합이 된다.
  if (pick === 1) return elements.map((elem) => [elem]);

  const combinations = [];
  // 각 원소에 남은 원소로 만들 수 있는 조합들을 붙인다.
  elements.forEach((element, index) => {
    // 만약 남은 원소의 길이가 골라야 하는 길이보다 짧으면 빈 배열이 반환되기 때문에 조합이 생성되지 않는다.
    const smallerCombinations = getCombination(elements.slice(index + 1), pick - 1);
    // 현재 원소 이후의 모든 원소를 포함하는 배열을 만들기 위해, slice() 메서드를 사용'

    // 재귀적으로 getCombination 함수를 호출하여, 남은 원소들 중에서 pick-1개의 조합을 생성합니다.
    // 이때, smallerCombinations 변수에 반환값을 할당합니다.
    smallerCombinations.forEach((combination) => {
      // smallerCombinations 배열을 순회하면서, 각각의 조합에 현재 원소를 추가하여 새로운 조합을 생성합니다.
      // 생성된 새로운 조합은 combinations 배열에 push() 메서드를 사용하여 추가됩니다.
      combinations.push([element].concat(combination));
    });
  });
  return combinations;
}

function solution(number) {
  const combinations = getCombination(number, 3);

  const result = new Set(); //Set 객체: 값의 중복을 허용하지 않음
  //   [ -3, -2, -1 ]
  for (let i = 0; i < combinations.length; i++) {
    const sum = combinations[i].reduce((acc, cur) => acc + cur, 0);
    if (sum === 0) {
      console.log("모든조합", combinations[i]);
      const unique = [...new Set(combinations[i])];
      console.log("중복을생략한조합", unique);
      result.add(unique.join(","));
    }
  }
  console.log(result);
  return result.size; // size: Set 객체가 가진 원소의 수를 나타내는 정수
}
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));

// 해당 문제는 주어진 숫자 배열에서 세 개의 숫자를 더하여 합이 0이 되는 경우의 수를 구하는 문제입니다.

// 이 문제를 풀기 위해서는 주어진 배열을 모든 가능한 조합으로 구해야 합니다. 조합을 구하는 방법은 재귀함수를 이용하거나 itertools 라이브러리를 이용할 수 있습니다.

// 조합을 구한 뒤에는 각 조합의 합을 구하여 0인 경우의 수를 세면 됩니다. 이 때, 중복된 조합을 세지 않도록 주의해야 합니다.

// combinations 함수: 재귀함수를 이용하여 배열에서 pick 조합을 구하는 함수
