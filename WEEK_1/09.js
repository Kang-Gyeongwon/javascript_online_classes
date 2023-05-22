// 스코프, 전역변수, 지역변수, 화살표함수
function printX() {
  let x = 10
  console.log(x)
}

// console.log(x)  // ReferenceError: x is not defined 오류발생
printX()