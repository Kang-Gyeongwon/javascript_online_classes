// 일급객체로써의 함수

// (1) 변수에 함수를 할당할 수 있다
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용할 수 있도록 조치가 되었다
// const sayHello = function () {
//   console.log("Hello!");
// };

// (2) 함수를 인자로 다른 함수에 전달할 수가 있다.
// (2)-1. 콜백함수: 매개변수로써 쓰이는 함수
// 콜백함수는 고차함수의 한 종류 => 콜백 함수는 매개변수로 쓰인 함수니깐 함수를
// 인자로 받기 때문
// (2)-2. 고차함수: 함수를 인자로 받거나 return하는 함수
// function callFunction(func) {
//   // 매개변수로 받은 변수가 사실, 함수
//   func();
// }

// const sayHello = function () {
//   console.log("Hello!");
// };

// callFunction(sayHello);

// (3) 함수를 반환할 수 있음
function creatAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = creatAdder(5); 
console.log(addFive(10));  // 15
