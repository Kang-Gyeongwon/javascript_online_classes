// 화살표 함수
// ES6부터 등장한 문법
// 1-1. 기본적인 화살표 함수
let arrowFun01 = (x, y) => {
  return x + y
}

// 1-2. 한줄로
// return 문을 뺄 수 있는 조건은 중괄호 안에 있는 줄이 한줄이면 가능
let arrowFun02 = (x, y) => x + y

function testFun(x) {
  return x
}

// 화살표 함수로
let arrowFun03 = x => x