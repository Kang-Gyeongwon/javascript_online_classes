// 배열

// 1. 생성
// 1-1. 기본 생성
// 객체는 나열, index를 가지고 있음
// index는 0부터 시작
// 대괄호를 이용하여 생성을 하고 콤마를 이용하여 각각을 구분
// let fruits = ["사과", "바나나", "오렌지"];

// // 1-2. 크기 지정
// let number = new Array(5);

// console.log(fruits.length)    // 3
// console.log(number)     // [ <5 empty items> ]
// console.log(number.length)    // 5

// 2. 요소 접근
// console.log(fruits[0]); // 사과
// console.log(fruits[1]); // 바나나
// console.log(fruits[2]); // 오렌지

// 3. 배열 메소드
// 3-1. push
// let fruits = ["사과", "바나나"];
// console.log(fruits)   // [ '사과', '바나나' ]

// fruits.push("오렌지");
// console.log(fruits)   // [ '사과', '바나나', '오렌지' ]

// 3-2. pop
//마지막 요소를 삭제하는 메소드
// let fruits = ["사과", "바나나"];
// console.log(fruits);    // [ '사과', '바나나' ]

// fruits.pop();
// console.log(fruits);    // [ '사과' ]

// 3-3. shift
// 첫번째 요소를 삭제하는 메소드
// let fruits = ["사과", "바나나", "키위"];
// console.log(fruits);    // [ '사과', '바나나', '키위' ]

// fruits.shift();
// console.log(fruits);    // [ '바나나', '키위' ]

// 3-4. unshift
// 맨 앞에 무언가 추가하는것
// fruits.unshift("포도");
// console.log(fruits);    // [ '포도', '사과', '바나나', '키위' ]

// 3-5. splice
// 위치를 지정해서 어떤 요소를 삭제하거나 추가할 수 있음
// splce(startNumber, deleteConut, 추가할 요소)
// 추가할 요소를 안적으면 삭제만됨
// let fruits = ["사과", "바나나", "키위"];

// fruits.splice(1, 1, "포도");  // 첫번째 요소부터 시작해서 첫번째 요소까지 삭제하고 포도를 추가
// console.log(fruits);      // [ '사과', '포도', '키위' ]

// 3-6. slice
// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(1, 2);  // 두번째 요소부터 세번째 요소전까지 새로운 배열로 만들어서 반환

// console.log(slicedFruits);  // [ '바나나' ]

// forEach, map, filter, find
let numbers = [4, 1, 5, 4, 5];

// 1. forEach
// 매개변수자리에 함수를 넣는 것 => 콜백함수
// 별도의 값이 리턴되지 않고 함수안에 값을 실행하는 역할
// numbers.forEach(function(item) {
//   console.log('item입니다 => ' + item);
// });
/*
item입니다 => 4
item입니다 => 1
item입니다 => 5
item입니다 => 4
item입니다 => 5
*/

// 2. map
// 기존에 있던 배열을 가공해서 새로운 배열을 생산해 내는 역활을 함
// 함수 안에 반드시 return 문을 가지고 있어야함
// 항상 원본 배열의 길이만큼 return됨
// return 을 안하면 undefined로 채워짐
// let newNumbers = numbers.map(function(item) {
//   return item * 2;
// });

// console.log(newNumbers);  // [ 8, 2, 10, 8, 10 ]

// 3. filter
// return문 뒤에 조건문이 들어가서 조건문에 해당되는 것만 리턴함
// let filteredNumbers = numbers.filter(function (item) {
//   return item > 3;
// });

// console.log(filteredNumbers);   // [ 4, 5, 4, 5 ]

// 4. find
// 조건문에 맞는것중에 첫번째인것만 반환

let result = numbers.find(function(item) {
  return item > 3;
});

console.log(result)     // 4
