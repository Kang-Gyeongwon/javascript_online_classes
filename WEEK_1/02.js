/*
데이터 타입
 JavaScript는 코드가 실행될 때 데이터 타입이 결정됨
 runtime : run 하는 time
 -> 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
 현재로썬 터미널에 코드가 실행될 때 데이터 타입이 결정됨
 ex) java -> String a = "abc";
     JavaScript -> cont s = "abc"
*/

// 1. 숫자
// "", '' 따옴표안에 숫자를 넣으면 데이터 타입이 string이 되기 때문에 숫자는 그냥 작성
// 1-1. 정수
let num1 = 10
console.log(num1)
console.log(typeof num1)    // typeof -> 데이터 타입을 확인하는 명령어

// 1-2. 실수(float)
let num2 = 3.14
console.log(num2)
console.log(typeof num2)

// 1-3. 지수형(Exp)
let num3 = 2.5e5    // 2.5 * 10^5
console.log(num3)
console.log(typeof num3)

// 1-4. 
// Nan : Not a Number, JavaScript 에서 숫자가 아님을 나타내는 값
let num4 = "Hello" / 2
console.log(num4)   // NaN

// 1-5. Infinity(무한대)
let num5 = 1 / 0
console.log(num5)   // Infinity
console.log(typeof num5)    // number

// 1-6. -Infinity(무한대)
let num6 = -1 / 0
console.log(num6)     // -Infinity
console.log(typeof num6)    // number