function timeConversion(s) {
  let splited = s.split(":");
  let militaryHrs = splited[0];
  let militarySec = splited[2];

  //1. PM이고 12시아님
  if (s.includes("PM")) {
    if (splited[0] === "12") {
      militaryHrs = militaryHrs * 1;
    } else {
      militaryHrs = militaryHrs * 1 + 12;
    }
    militarySec = militarySec.replace(/PM/g, "");
    return militaryHrs + ":" + splited[1] + ":" + militarySec;
  } else {
    if (splited[0] === "12") {
      militaryHrs = "00";
    }
    militarySec = militarySec.replace(/AM/g, "");
    return militaryHrs + ":" + splited[1] + ":" + militarySec;
  }
}
console.log(timeConversion("12:45:54PM"));
