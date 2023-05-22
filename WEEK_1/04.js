// 불리언(Boolean)
// true(참), false(거짓)
// 참인지 거짓인지에 따라서 논리적으로 판단해서 여러가지 선택을 하기 때문에 프로그래밍 언어에서는 중요함
let bool1 = true
let bool2 = false

// console.log(bool1)
// console.log(typeof bool1)
// console.log(bool2)
// console.log(typeof bool2)

// undefined
// un : not, define : 정의하다
// 값이 할당되지 않은 변수를 의미
let x
console.log(x)    // undefined

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null 과 undefined 같은 것이 아님
let y = null
console.log(y)

// object(객체) : key - value pair
let person = {
  name: 'choi',
  age: 20,
  isMarried: true
}

console.log(typeof person)

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
let number = [1, 2, 3, 4, 5]
let fruits = ['apple', 'banana', 'orange']