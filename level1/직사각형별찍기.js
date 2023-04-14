process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < a; i++) {
    let str = "";
    for (let j = 0; j < b; j++) {
      str += "*";
    }
    console.log(str);
  }
});

star(5, 3); // 가로의 길이가 5, 세로의 길이가 3인 직사각형 출력
