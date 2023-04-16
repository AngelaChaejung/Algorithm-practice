//  두명의 친구는 저녁을 먹고 어떻게 나눌지 결정하고있다.
// 각자가 그들이 쓴 항목에 대해서만 지불할것이다 .
// brian은 영수증을 받고 Anna의 부분을 계산했다
//  당신은 brian의 계산이 맞는지 알아내야햔다.

bill = [2, 4, 6];
// 안나는 k를 먹지 않음.
k = bill[2]; //6 dollars
// 그럼 안나는 (2+4)/2 3달러를 지불하면됨.
// 근데만약ㄱ brian이 사기쳐서 6달러를 제외하지 않고 계산했다면
//(2+4+6)/2 //즉, 6달러를 요구할 것.
// 만약 b가 맞는 금액이라면 bon appetit을 프린트,
// 아니라면 안나에게 돌려줄금액을 프린트.

function bonAppetit(bill, k, b) {
  let menu = bill;
  let annaDoesntEat = menu[k];
  let annaPaid = b;
  //   console.log("menu:", menu);
  //   console.log("annaDoesntEat:", annaDoesntEat);
  //   console.log("annaPaid:", annaPaid);

  let annaShouldPay = (menu.reduce((acc, cur) => acc + cur) - annaDoesntEat) / 2;
  //   console.log("annaShouldPay", annaShouldPay);
  if (b === annaShouldPay) {
    return "Bon Appetit";
  } else return b - annaShouldPay;
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
