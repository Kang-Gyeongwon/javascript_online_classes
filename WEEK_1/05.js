// 형 변환
// 자바스크립트의 데이터 타입을 형태로 바꿈
// 명시적 형 변환, 암시적 형 변환
// 명시적 형 변환 -> 개발자가 의도적으로 바꿈
// 암시적 형 변환 -> 의도하지는 않았지만 암시적으로 바뀜

// 암시적
// 1-1. 문자열
// 문자열과 다른데이터 타입이 더하기 연산자로 만나면 문자열이 우선시 됨
// {}, null, undefined, boolean, number + "1" => 문자열
let result1 = 1 + "2"
// console.log(result1)      // 12
// console.log(typeof result1)     // string

let result2 = "1" + true
// console.log(result2)      // 1true
// console.log(typeof result2)     // string

// 1-2. 숫자
// 더하기 연산자가 아닌 다른 연산자 빼기나 곱하기 나누기등이 나왔을때는 숫자가 우선시 됨, 문자랑 문자가 만나도 숫자가 됨
let result3 = 1 - "2"
// console.log(result3)      // -1
// console.log(typeof result3)       // number

let result4 = "2" * "3"
// console.log(result4)        // 6
// console.log(typeof result4)         // number

// 명시적 형 변환
// 2-1. Boolean
// 어떠한 타입으로 형변환한다는것을 명시적으로 적어야함
// console.log(Boolean(0))           // false
// console.log(Boolean(""))          // false
// console.log(Boolean(null))        // false
// console.log(Boolean(undefined))   // false
// console.log(Boolean(NaN))         // false
// console.log("----------------")
// console.log(Boolean("false"))     // true, 빈 문자열이 아닌 값이 있는 문자열은 무조건 true가 나옴
// console.log(Boolean({}))          // true, 객체는 값이 비어있어도 true

// 2-2. 문자열
let result5 = String(123)
console.log(typeof result5)     // string
console.log(result5)            // 123

let result6 = String(true) 
console.log(typeof result6)     // string
console.log(result6)            // true

let result7 = String(false)
console.log(typeof result7)     // string
console.log(result7)            // false

let result8 = String(null)
console.log(typeof result8)     // string
console.log(result8)            // null

let result9 = String(undefined)
console.log(typeof result9)     // string
console.log(result9)            // undefined

// 1-3. Number
let result10 = Number("123")
console.log(result10)           // 123
console.log(typeof result10)    // number