// 샘의집에는 열매가 많이 맺힌 사과나무와 오렌지나무가있습니다.
// 아래의 정보를 이용하여 사과와 오렌지의 갯수를 도출하시오

// 붉은색영역은 집을 의미한다. s는 시작점, t는 끝나는지점이다. 사과나무는 집의 왼쪽에위치, 오렌지나무는 오른쪽에.
// 과일이 나무에서 떨어질 때, 과일은 나무의 원점에서 x축을 따라 나무로부터 d 거리 단위로 떨어집니다.음수값은 왼쪽, 양수값은 오른쪽으로 과일이 떨어진 것을 의미함.
// m개의 사과와 n개의 오렌지의 값이 주어진다. 몇개의 사과와 오렌지가 샘의 집(즉, [s,t]포함 범위)에 떨어질 것인지 구하시오.
// 예를 들어, 샘의 집이 s=7 t=10에 위치했을 때, 사과나무의 위치는 4이고 오렌지나무의 위치는 12임.
// 3개의 사과, 3개의 오렌지가 있음. 사과는 [2,3,-4]거리에, 오렌지는 [3 , -2, -4]단위에 떨어짐.
// 그러므로 사과의 나무로부터의 거리는 각각 [4+2, 4+3, 4+-4]=[6,7,0]
// 오렌지는 [12+3, 12+-2, 12+-4]= [15, 10, 8]
// 사과 하나와 오렌지 두개가 7-10사이(집영역) 포함되는 위치이기 때문에 1,2를 프린트.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleTree = a;
  let orangeTree = b;
  let house = [s, t];
  let appleLocation = [...apples];
  [...apples].map((apple, i) => {
    appleLocation[i] = apples[i] + appleTree;
  });
  console.log(appleLocation);
  let orangeLocation = [...oranges];
  [...oranges].map((orange, i) => {
    orangeLocation[i] = oranges[i] + orangeTree;
  });
  console.log(orangeLocation);
  let answerApple = 0;
  let answerOrange = 0;
  appleLocation.map((e, i) => {
    if (s <= e && e <= t) {
      answerApple += 1;
    }
  });
  orangeLocation.map((e, i) => {
    if (s <= e && e <= t) {
      answerOrange += 1;
    }
  });

  console.log(
    "집:",
    house,
    "사과나무위치:",
    a,
    ",오렌지나무위치:",
    b,
    "사과떨어진어레이:",
    apples,
    ",오렌지떨어진어레이:",
    oranges
  );
  console.log([answerApple, answerOrange]);
  return [answerApple, answerOrange];
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleTree = a;
  let orangeTree = b;
  let house = [s, t];
  let appleLocation = [...apples];
  [...apples].map((apple, i) => {
    appleLocation[i] = apples[i] + appleTree;
  });

  let orangeLocation = [...oranges];
  [...oranges].map((orange, i) => {
    orangeLocation[i] = oranges[i] + orangeTree;
  });

  let answerApple = 0;
  let answerOrange = 0;
  appleLocation.map((e, i) => {
    if (s <= e && e <= t) {
      answerApple += 1;
    }
  });
  orangeLocation.map((e, i) => {
    if (s <= e && e <= t) {
      answerOrange += 1;
    }
  });
  return [answerApple, answerOrange];
}
