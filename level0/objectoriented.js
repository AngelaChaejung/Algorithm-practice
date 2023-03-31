let name = "SAMSUNG STORE";

class Product {
  name = "";
  price = 0;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class TV extends Product {
  size = "";
  constructor(name, price, size) {
    super(name, price); //현재위치의 상위 클래스를 부를 때 super.
    this.size = size;
  }
  getPrice() {
    return this.price + "만원";
  } //캡슐화 장점: 이 변수에 유저가 직접 접근할 수 없음.원하는형태의값으로 .
  setPrice(price) {
    if (price < 0) {
      throw Error("마이너스값 안됨");
    }
    this.price = price;
  }
}
let tv3 = {
  name: "grand TV",
  size: "36inch",
};

//작업지시서같은 역할. 1. name, price size라는 속성들이 반드시 있어야 한다.
//2. 처음 만들 때 name, price, size를 꼭 넣어줘야한다.

let tv1 = new TV("noona", 200, "56inch");
let tv2 = new TV("ultra TV", 200, "27inch");

tv1.setPrice(1000);
console.log(tv1.getPrice(), tv2.name);
class AC extends Product {
  type = "";
}

class laptop extends Product {
  //상속
  weight = 0;
}
