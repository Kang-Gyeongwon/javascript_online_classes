// 2. 문자 : string(문자열 = 문자의 나열)
// '' = "" -> 작은따옴표나 큰따옴표로 감싸줘야만 문자열
let str = "Hello World!"
// console.log(str)
// console.log(typeof str)

// 2-1. 문자열 길이 확인하기
// console.log(str.length)   // 12

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello,"
let str2 = "world!"
let result = str1.concat(str2)
// console.log(result)     // Hello,world!

// 2-3. 문자열 자르기
let str3 = "Hello, World!"
// console.log(str3.substr(7, 5))      // World, substr - 문자열을 자르는 기능을 함, (어디서부터 자를지, 몇개까지 자를지)를 괄호안에 숫자로 작성
// console.log(str3.slice(7, 12))      // World, slice - 문자열을 자르는 기능을 함, (시작할 숫자, 끝낼 숫자)를 괄호 안에 작성

// 2-4. 문자열 검ㄴ색
let str4 = "Hello, World1"
// console.log(str4.search("World"))      // 7, search - 몇번째부터 시작되는지를 찾음

// 2-5. 문자열 대체
let str5 = "Hello, World!"
let result01 = str5.replace("World", "JavaScript")      // replace - 원래단어, 바꿀단어 를 괄호안에 작성
// console.log(result01)         // Hello, JavaScript!

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi"
let result02 = str6.split(",")        // split - 무엇을 기준으로 자를지  작성
console.log(result02)         // [ 'apple', ' banana', ' kiwi' ] -> , 를 기준으로 합쳐져 있던것이 나눠짐