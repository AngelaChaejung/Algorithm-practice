// 모든 요소가 새의 typeid를 의미하는 배열이주어집니다.
// 만약 하나의 타입 이상이 최대치에 spot된다면 그들의 가장 작은 id를 return.

function migratoryBirds(arr) {
  let maxdup = 0;
  let maxdupelement = 0;
  let samemaxdup = [];
  const duplicates = arr.reduce((acc, item) => {
    if (arr.indexOf(item) !== arr.lastIndexOf(item) && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  for (let i = 0; i < duplicates.length; i++) {
    const dupcount = arr.filter((item) => item === duplicates[i]).length;
    if (dupcount > maxdup) {
      maxdup = dupcount;
      maxdupelement = duplicates[i];
    }

    console.log(duplicates[i], ":", dupcount);
    console.log(maxdupelement, maxdup);
    console.log(samemaxdup);
  }
  for (let i = 0; i < duplicates.length; i++) {
    const dupcount = arr.filter((item) => item === duplicates[i]).length;
    if (dupcount === maxdup) {
      samemaxdup.push(duplicates[i]);
    }
  }
  console.log(samemaxdup);
  return Math.min(maxdupelement);
}
console.log(migratoryBirds([1, 4, 4, 4, 4, 5, 3, 1, 1, 1]));

// example. migratoryBirds([1, 1, 2, 2, 3])
// 타입1,2 그리고 하나의 sighting의 3이있다.
// 두번씩 목격된 두개의 타입 1,2 중 더 작은 1을 return.
// 가장 많이 중복된 요소. 그 중에서도 더 작은 값
