// ES6

// (1) 2015년 이전 => var
// ES6 => let(변수선언), consdt(상수선언)
// const는 재할당 불가, let 재할당 가능
// var는 재선언, 재할당 모두 가능

// (2) arrow function
let add = () => {};
let add2 = (x) => 1; // return문이 한줄인 경우에는 중괄호와 return 모두 생략가능
// 매개변수가 하나일 경우에는 소괄호도 없앨수 있음

// (3) 삼항 연산자
// condition ? true인 경우 : false인 경우
console.log(true ? "참" : "거짓");
console.log(false ? "참" : "거짓");
