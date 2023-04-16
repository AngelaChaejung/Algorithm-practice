// 1700~1917년 러시아는 율리언달력을 이용, 1919부터 그레고리안달력이용
// 1918년에 변경.
// 그래서 1월31일 다음날이 2월 14일이었음.
// 이 말  뜻은, 2018년 2월 14일은 러시아에게 1918년의 32번째 날이었다는것.
// 양 캘린더시스템에 2월은 변동적인 날짜를 갖는 날이다.
// 윤년에는 29일까지있고, 나머지해에는 28일까지 있음.
// 율리언달력은 윤년이 4의 배수인 해. 그레고리안달력은 윤년이 아래 조건을 따른다.
// 400으로 나눠짐.
// 4로나눠지되, 100으로는 나누어지지 않음.

// y연도가 주어짐. 256번째 날짜를 구하시오 러시아 달력시스템을 기반으로.
// dd.mm.yy
// 형식으로.

function dayOfProgrammer(year) {
  let day = 256;
  let calendaySystem;

  switch (true) {
    case year > 1918:
      calendaySystem = "Gregorian";
      break;
    case year < 1918:
      calendaySystem = "Julian";
      break;
    default:
      calendaySystem = "mixed";
      break;
  }
  let febdays;

  if (calendaySystem === "Julian") {
    if (year % 4 === 0) {
      febdays = 29;
    } else {
      febdays = 28;
    }
  } else if (calendaySystem === "Gregorian") {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      febdays = 29;
    } else {
      febdays = 28;
    }
  } else {
    febdays = 15;
  }
  let monthDays = [31, febdays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daysum = 0;

  for (let month = 0; month <= 12; month++) {
    if (day <= monthDays[month]) {
      //monthDays[month]는 각 월의 마지막날.
      break;
    }
    daysum += monthDays[month];
    day -= monthDays[month]; //1월, daysum+=31, day-=31. 2월, ...
    //그렇게해서 day가 256에서 점차 작아져 monthDays보다 작은 숫자가 될 때 break.
  }
  month += 1;

  let dd = day.toString().padStart(2, "0");
  let mm = month.toString().padStart(2, "0");
  let yy = yaer.toString().slice(-2);

  return dd + "." + mm + "." + yy;
}
