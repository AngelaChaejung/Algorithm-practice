// //this는 함수가 호출될 때 결정이 된다.
// //누가 this를 호출했냐에 따라 값이 바뀐다.

// const car = {
//   name: "KIA",
//   getName: function () {
//     console.log("car getName", this);
//   },
// };

// // car.getName(); //A.b

// // const globalCar = car.getName;
// // globalCar(); //b 최상단 window가 불렀다고인식.

// const car2 = {
//   name: "hyundai",
//   getName: car.getName,
// };
// car2.getName();
//car2가 this를 호출했기때문에 car2가 나옴.

//this의 값을 고정하기 위해 나온게 .bind

// const bindGetName = car2.getName.bind(car);
// bindGetName();

// const testCar = {
//   name: "benz",
//   getName: function () {
//     console.log("getName", this);
//     const innerfunction = () => {
//       console.log("innerFunction", this);
//     };
//     innerfunction(); //누가호출을 안해서 window객체가 나옴.
//   },
// };
// testCar.getName();
//화살표함수에서의 this는 함수가 속해있는 곳의 상위 this를 계승받는다.
//일반함수에서의 this와 화살표함수에서의 this가 다름

const ageTest = {
  unit: "살",
  ageList: [10, 20, 40],
  getAgeList: function () {
    const result = this.ageList.map((age) => {
      return age + this.unit;
    });

    console.log(result);
  },
};
ageTest.getAgeList();
//함수 안에있는 함수같은 경우 같은 this를 쓴다면 화살표함수를 쓰는게 좋다.
//일반적으로 this가 있는 함수를 만들 땐, 일반함수를 쓰는게 낫다.
