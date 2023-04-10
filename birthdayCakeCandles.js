function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);

  return candles.filter((elem) => max === elem).length;
}

console.log(birthdayCakeCandles([1, 2, 3, 4, 4, 4, 5, 5, 3]));
