function solution(letter) {
  let answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const splitedletter = letter.split(" ");
  for (const morseCode of splitedletter) {
    answer += morse[morseCode];
    console.log(morseCode);
  }

  return answer;
}

console.log(solution(".... . .-.. .-.. ---")); // "hello"가 출력됩니다.
