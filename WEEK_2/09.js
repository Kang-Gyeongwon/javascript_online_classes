// Iterator - 반복자
const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

// console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }
// for (const key of myMap.keys()) {
//   console.log(key);
// }

// console.log(myMap.values());   // [Map Iterator] { 1, 2, 3 }
// for (const value of myMap.values()) {
//   console.log(value);
// }

// console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
// // key와 value의 값 하나씩 배열로 묶고 천체 내용을 객체로 감싸줌
// for (const entry of myMap.entries()) {
//   console.log(entry);
// }

// Map 의 크기와 존재여부 확인
console.log(myMap.size);   // map의 길이
console.log(myMap.has("two"));  // key 기반 검색
