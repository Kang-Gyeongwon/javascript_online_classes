// 구조분해할당: destructuring(de + structuer + ing)
// de = not
// structuer = 구조
// 배열이나, 객체의 속성을 분해해서 각각 떼어내서 그값을 변수에 담을 수 있게 해주는 문법

// (1) qodufdml ruddn
// let [value1, value2] = [1, "new"];
// console.log(value1);
// console.log(value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr;
// let [a, b, c, d = 4] = arr; d가 undefined의 경우 초기값을 세팅해준 값으로 출력됨
// 반환받을 값이 있으면 초기값을 보여주지 않고 반환되는 것을 보여줌

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); // 할당받을 값이 없으므로 자바스크립트 엔진이 자동으로 undefined를 반환

// (2) 객체인 경우
// let user = {
//   name: "abc",
//   age: 30,
// };

// let { name, age } = user;
// 객체의 key값과 매칭되서 리턴함
// let { name, age } = {
//   name: "abc",
//   age: 30,
// };
// console.log(name);   // string
// console.log(age);    // number

// 새로운 이름으로 할당
let user = {
  name: "abc",
  age: 30,
};
let { name: newName, age: newAge } = user;
// name에 abc가 아니라 newName이라는 변수에 새로운 이름으로 할당
console.log(`newName => ${newName}`); // newName => abc
console.log(`newAge => ${newAge}`); // newAge => 30

let { name, age, birthday } = user;
console.log(name);
console.log(age);
console.log(birthday); // undefined, 초기값을 미리 설정할 수 있음
