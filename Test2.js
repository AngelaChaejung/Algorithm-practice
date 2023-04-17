function findRange(num) {
  let cases = [];
  let numStr = num.toString();
  for (let i = 1; i < 10; i++) {
    let replaced0 = numStr.replace(/0/g, i);
    if (replaced0 !== numStr) {
      cases.push(replaced0);
    }
    let replaced1 = numStr.replace(/1/g, i);
    if (replaced1 !== numStr) {
      cases.push(replaced1);
    }
    let replaced2 = numStr.replace(/2/g, i);
    if (replaced2 !== numStr) {
      cases.push(replaced2);
    }
    let replaced3 = numStr.replace(/3/g, i);
    if (replaced3 !== numStr) {
      cases.push(replaced3);
    }
    let replaced4 = numStr.replace(/4/g, i);
    if (replaced4 !== numStr) {
      cases.push(replaced4);
    }
    let replaced5 = numStr.replace(/5/g, i);
    if (replaced5 !== numStr) {
      cases.push(replaced5);
    }
    let replaced6 = numStr.replace(/6/g, i);
    if (replaced6 !== numStr) {
      cases.push(replaced6);
    }
    let replaced7 = numStr.replace(/7/g, i);
    if (replaced7 !== numStr) {
      cases.push(replaced7);
    }
    let replaced8 = numStr.replace(/8/g, i);
    if (replaced8 !== numStr) {
      cases.push(replaced8);
    }
    let replaced9 = numStr.replace(/9/g, i);
    if (replaced9 !== numStr) {
      cases.push(replaced9);
    }
  }
  let arr = cases.sort();
  console.log(cases);
  let answer = arr[arr.length - 1] - arr[0];
  console.log(answer);
  return answer;
}
console.log(findRange(123512));

function findRange(num) {
  const numStr = num.toString();
  const candidates = [];
  for (let i = 0; i < numStr.length; i++) {
    for (let digit = 0; digit <= 9; digit++) {
      if (digit === 0 && i === 0) {
        continue;
      }
      const candidate = parseInt(numStr.slice(0, i) + digit.toString() + numStr.slice(i + 1));
      if (candidate !== num && candidate.toString().length === numStr.length && !candidates.includes(candidate)) {
        candidates.push(candidate);
      }
    }
  }
  candidates.sort((a, b) => a - b);
  return candidates.length > 0 ? candidates[candidates.length - 1] - candidates[0] : 0;
}
