function solution(orders) {
  let answer = [];
  let maxCount = 0;
  let maxCountUser = "";
  let uniqueMenus = [...new Set(orders.flatMap((order) => order.split(" ").slice(1)))];
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i].split(" ").slice(1);
    let count = 0;
    for (let j = 0; j < uniqueMenus.length; j++) {
      if (order.includes(uniqueMenus[j])) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      maxCountUser = [orders[i].split(" ")[0]];
    } else if (count === maxCount) {
      maxCountUser.push(orders[i].split(" ")[0]);
    }
  }
  answer = maxCountUser.sort();

  return answer;
}
