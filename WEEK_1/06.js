// 연산자
// 자바스크립트에서는 변수와 상수를 이용해서 많은 연산들을 처리하는데 이때 필요한게 연산자
// +, -, *, /, %

// 1. 더하기 연산자
// console.log(1 + 1)
// console.log(1 + "1")

// 2. 빼기 연산자
// console.log(1 - "2")    // -1
// console.log(1 - 2)      // -1

// 3. 곱하기 연산자(*)
// console.log(2 * 3)      // 6
// console.log("2" * 3)    // 6

// 4. 나머지 연산자(/)
// console.log(4 / 2)      // 2
// console.log("4" / 2)    // 2

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
// console.log(5 / 2)      // 2.5
// console.log(5 % 2)      // 1

// 6. 할당 연산자(assignment)
// 우에서 좌로 할당
// 6-1. 등호 연산자(=)
// let x = 10
// console.log(x)

// // 6-2. 더하기 등호 연산자(+=)
// x += 5
// console.log(x)

// // 6-3. 빼기 등호 연산자(-=)
// x -= 5
// // x = x -5
// console.log(x)

// // Q. x를 10으로 만들어라
// x -= 20
// // x = x - 20
// console.log(x)

// // 6-4. 곱하기 등호 연산자(*=)
// let a = 10
// a *= 2

// console.log(a)    // 20

// 비교 연산자(true 또는 false를 반환하는 연산자)
// 좌, 우 혹은 어떠한 값을 비교해서 true or false 값을 내는 연산자
// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

console.log(2 === 2)    // true
console.log("2" === 2)  // false
console.log(2 === "2")  // false

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니
console.log(2 !== 2)    // false
console.log("2" !== 2)  // true
console.log(2 !== "2")  // true

// 3. 작다 연산자(<), 작거나 같다 연산자(<=)
console.log(2 < 3)       // true
console.log(2 <= 3)      // true
console.log(3 <= 3)      // true
console.log(3 <= 3)      // false

// 4. 논리 연산자
// true와 false를 비교하는 연산자
// 4-1. 논리곱 연산자
// 두값이 모두 true일때만 true를 반환
console.log(true && true)   // true
console.log(true && false)  // flase
console.log(false && true)  // false
console.log(false && false) // false

// 4-2. 논리합 연산자
// 두 값 중 하나라도 true인 경우 true를 반환
console.log(true || true)   // true
console.log(true || false)  // true
console.log(false || true)  // true
console.log(false || false) // false

// 4-3. 논리부정 연사자
// 값을 반대로 바꿈
console.log(!true)      // false
let a = true
console.log(!a)         // false

// 5. 삼항 연산자(중요!!)
// 조건에 따라 값을 선택한다.
// 조건 ? true일때 반환 : false일때 반환
let x = 10
let result = (x > 5) ? "크다" : "작다"
console.log("--------")
console.log(result)     // 크다

console.log("--------")

// Q. 삼항연산자를 이용해서 y가 10보다 작은 경우를 작다로 console.log로 출력
// 10보다 크다면 크다를 출력
let y = 20
let aResult = y < 10 ? "작다" : "크다"
console.log(aResult)     // 크다

// 6. 타입연산자(typeof)
console.log(typeof "5")