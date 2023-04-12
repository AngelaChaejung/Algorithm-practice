function gradingStudents(grades) {
  let answer = [...grades];
  grades.map((e, i) => {
    console.log(e);
    if (e >= 38) {
      console.log("pass");
      //40이상. pass의 경우
      if (e % 5 >= 3) {
        answer[i] = Math.floor(e / 5 + 1) * 5;
        console.log(answer[i], "반올림");
      } else console.log(answer[i], "반올림하지 않음");
    } else {
      console.log("fail");
      answer[i] = e;
      console.log(answer[i], "fail은 반올림하지않음");
    }
  });
  return answer;
}
console.log(gradingStudents([73, 67, 38, 33]));
