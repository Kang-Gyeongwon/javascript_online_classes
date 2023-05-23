// 객체
// key - value pair
// 객체의 장점은 하나의 변수에 여러개의 값을 넣을 수 있음
// key에 할당되는 value는 어떠한 값도 가능함(데이터 타입의 제한이 없음)

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
// let person = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자"
// };

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// 많은 객체를 한꺼번에 여러개를 생성할 수 있음
function Person(name, age, gender) {
  this.name = name,
  this.age = age,
  this.gender = gender
};

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
// 객체명.property
// console.log('1', person.name);
// console.log('2', person.age);
// console.log('3', person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key(매개변수): key를 가져오는 메소드
// 객체안에 있는 key들이 배열 형태로 keys에 담기게 됨
let person = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

let keys = Object.keys(person);
// console.log('keys =>',  keys)     // keys => [ 'name', 'age', 'gender' ]

// 3-2. values
let values = Object.values(person)
// console.log('values =>',  values)   // values => [ '홍길동', 30, '남자' ]

// 3-3.entries
// key와 value를 묶어서 배열로 만든 배열!!(2차원 배열)
// key, value가 각각의 요소로 분리가 되고, 그 요소들이 배열 형태로 들어가 있음
let entries = Object.entries(person)
// console.log('entries =>',  entries)   // entries => [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', '남자' ] ]

// 3-4. assign
// 객체 복사
// Object.assign(target(어디에 복사할지(매개변수)): {}, source(어떤걸 복사할래): any)
let newPerson = {};
// Object.assign(newPerson, person)
// console.log('newPerson =>',  newPerson)  // newPerson => { name: '홍길동', age: 30, gender: '남자' }

// 속성을 바꾸는 법
Object.assign(newPerson, person, { gender: "여자" });
// console.log('newPerson =>',  newPerson);  // newPerson => { name: '홍길동', age: 30, gender: '여자' }

// 3-5. 객체 비교
// 객체나 배열은 다른 데이터 타입에 비해 크기가 큼 
// => 메모리에 저장할 때 별도의 공간에 저장
// person1 별도 공간에 대한 주소
// let person1 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자"
// }
// // person2 별도 공간에 대한 주소
// let person2 = {
//   name: "홍길동",
//   age: 30,
//   gender: "남자"
// }
// let str1 = "aaa";
// let str2 = 'aaa';

// console.log(person1 === person2)   // false
// console.log(str1 === str2)    // true

// JSON에서 제공하는 stringify(문자열화 시킨다) => 객체를 문자열화 시킬수 있음
// console.log(JSON.stringify(person1) === JSON.stringify(person2));  // true

// 3-6.객체 병합
let person1 = {
  name: "홍길동",
  age: 30
};

let person2 = {
  gender: "남자"
};

// ...명령어: spread operator ES6에서 나온 명령어
let perfectMan = {...person1, ...person2}
console.log(perfectMan)