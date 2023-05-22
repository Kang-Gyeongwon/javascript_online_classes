// 함수(funtion) = 기능
// input, output을 가지고 있는 어떤 기능의 단위로 묶은다음에 재활용을 해서 사용함

// 1. 함수 선언문
// function 함수명 (매개변수) {
//   // 함수 내부에서 실행할 코드
// }
// 두 개의 숫자를 입력 받아 덧셈을 한 후 내보내는 함수
function add (x, y) {
  return x + y
}

// 2. 함수 표현식
let add2 = function (x, y) {
  return x + y
}

// 함수를 호출한다(=사용한다)
// 함수명(입력값)
// console.log(add(2, 3))

// let funtionResult = add(3, 4)
// console.log(funtionResult)

// Q. add2를 가지고 10과 20을 더한 값을 출력해보기
let funtionResult2 = add2(10, 20)
console.log(funtionResult2)

// input -> 매개변수(매개체가 되는 변수)
// output -> return문 뒤에 오는 값(반환값)