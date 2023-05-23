// 조건문 - if, else if, else, switch
// 특정 조건에 해당되는 경우에만 그 하위에 어떤 로직을 실행할 수 있게 제어할 수 있음
// 1.-1 if문
// if (조건문 - true 또는 false가 나올수 잇는 조건) {
//   main login
// }
// let x = 10

// if (x < 0) {
//   console.log('x는 양수입니다.')
// }

// // Q.
// let y = "hello world"

// // y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
// if(y.length >= 5) {
//   console.log(y.length)
// }

// 1-2. if-else문
// if (조건문){
//   main logic #1    -> true인 경우 실행할 코드
// } else {
//   main logic #2    -> false인 경우 실행할 코드
// }

// let x = -3
// if(x > 0) {     // -> false값을 반환
//   console.log('x는 양수입니다.')
// } else {
//   console.log('x는 음수입니다.')
// }

// 1-3. if - else if - else 문
// if (조건1) {
//   main logic #1   -> 조건1이 true인 경우 실행
// } else if (조건2) {
//   main logic #2   -> 조건1이 false이고 조건2가 true인 경우 실행
// } else {
//   main logic #3   -> 모든 조건이 false일때 실행
// }

let x = 5
if (x < 0) {
  console.log("1")
} else if (x >=0  && x < 10) {
  console.log("2")
} else {
  console.log("3")
}

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// break - 모든 case와 default에 끝날 때 break 문을 넣어줘야지 해당 코드만 실행되고 끝낼수 있음
// default - 모든 case에 적합하지 않을때
let fruit = "사과"

switch (fruit) {
  case "사과":
    console.log('사과입니다.')
    break
  case "바나나":
    console.log('바나나입니다.')
    break
  case "키위":
    console.log('키위입니다.')
    break
  default:
    console.log('아무것도 아닙니다.')
    break
}