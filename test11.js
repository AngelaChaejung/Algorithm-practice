function findMinInterestRate(p, m, d) {
  const target = (d / p) ** (1 / m);
  const answer = Math.ceil(100 * (target - 1));
  return answer;
}
