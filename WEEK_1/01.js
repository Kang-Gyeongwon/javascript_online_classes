// 주석
// JS 엔진이라고 부르는 JavaScript 구동하는 프로그램이 해석하지 않는 부분

// Node.js가 작동하고 있는지 확인하기
// console.log("Hello World!")       // 터미널에 Node 파일명

// 변수, 상수
// 변수란 기억하고 싶은 값을 메모리에 저장한 후 저장된 값을 읽어 들여서 재사용함

// 변수의 5가지 주요 개념
// 변수이름 : 저장된 값의 고유 이름, 보통 영어로 작성, 키워드 바로 뒤에 옴
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위 => 키워드를 이용해서 변수를 만들어달라고 컴퓨터에 알리는 행위(키워드 변수이름)
// 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 키워드 : var, let, const
// 1. var
// -> 재선언이 가능함
// -> 재할당이 가능함
var myVar = "Hello World"
var myVar = "Test 1"
myVar = "GoodBye"
console.log(myVar)

// 2. let
// -> 재선언이 블가능함
// -> 재할당이 가능함
let myLet = "Hello World1"
// let myLet = "Test 2"
myLet = "GoodBye1"
console.log(myLet)

// 3. const
// -> 재선언이 블가능함
// -> 재할당이 블가능함
const myConst = "Hello World3"
// const myConst = "Test 1"
// const myConst = "GoodBye2"
console.log(myConst)

// 변수의 선언과 할당은 따로 사용할 수 있음 -> 특별한 이유가 있지않으면 한줄로 사용함
var myVar1
myVar1 = 3      // var myVar1 = 3