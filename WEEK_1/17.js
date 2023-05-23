// for, while => 동안: 반복문
// 프로그래밍에서는 반복하는 작업을 자동으로 하기 위해서 하는 것이기 때문에 핵심적인 역활을 하는 문법

// for문
// for (초기값; 조건식; 증감식) {
//   반복할 코드
// }
// i라는 변수는 0부터 시작해서 10에 도달하기 전까지 계속 반복하며
// 한사이클이 돌고 나면 1을 더함
// for (let i = 0; i < 10; i++) {
//   console.log(`for문 돌아가고 있음 => ${i}`)
// }

// 배열과 for문은 짝꿍
// const arr = ["one", "two", "three", "four", "five"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// };

// Q. 0부터 10까지의 수 중에서 2의 배수만 출력
// for (let i = 0; i <= 10; i++) {
//   if (i >= 2) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
  name: "John",
  age: 30,
  gender: "male",
};

// {person['key']: 객체의 value에 접근할 수 있는 또다른 방법
for (let key in person) {
  // key => 위에 적힌 객체안에 key를 가리킴
  console.log(`${key}: ${person[key]}`);
}
