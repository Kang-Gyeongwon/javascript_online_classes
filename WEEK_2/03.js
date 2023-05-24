// 단축 속성명 : property shorthand
const name = "age";
const newAge = "30";

const obj = {
  name, // key와 value가 이름이 같은 경우에는 생략이 가능
  age: newAge,
};

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 ES6 문법 중 하나
// 이 구조를 벗어버리고 새로운 구조로 덧입혀야할 때 사용
// let arr = [1, 2, 3];
// console.log(arr); // [ 1, 2, 3 ]
// console.log(...arr); // 1 2 3

// let newArr = [...arr, 4];
// console.log(newArr);    // [ 1, 2, 3, 4 ]

// 객체
let user = {
  name: "abc",
  age: 30,
};

let user2 = { ...user };
console.log(user); // { name: 'abc', age: 30 }
console.log(user2); // { name: 'abc', age: 30 }

// 나머지 매개변수(rest parmeter)
// 매개 변수의 개수를 정확히 모를때
// ...args(arguments의 약자)를 사용해서 추가적으로 arguments가 들어올수 있다라는 것을 명시해줄 수 있음
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c); // 1 2 3
  console.log(...args); // 4 5 6 7
  // ...를 빼고 args만 입력하면 [4, 5, 6, 7]배열 형태로 반환
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
// ${}를 사용하여 자바스크립트 코드를 입력할 수 있음
const testValue = "안녕하세요";
console.log(`Hello World ${testValue}`);

// 멀티라인을 지원함
console.log(`
  Hello
    My name is JavaScript!!!

    Nice to meet you
`);
