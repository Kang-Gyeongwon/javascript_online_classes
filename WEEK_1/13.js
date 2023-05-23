// 조건부 실행
let x = 10;

// if (x > 0) {
//   console.log("x는 양수입니다.")
// }
// and 조건(&&)
(x > 0) && console.log("x는 양수입니다.")   // -> &&(and)조건 때문에 실행되고 있음

// or조건(||)
// // 삼항 연산자와 단축평가
let y;      // y에는 undefined
let z = y || 20;    // y가 undefined 이면 20을 기본값으로 세팅

console.log(z)