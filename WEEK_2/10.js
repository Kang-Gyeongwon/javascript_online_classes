// Set
// 특징
// 고유한 값을 저장하는 자료구조
// 값만 저장함
// 키를 저장하지 않음
// 갑싱 중복되지 않는 유일한 요소로만 구성됨
// set을 통해 할수 있는 작업
// > 값 추가, 검색, 값 삭제, 모든 값 제거, 존제 여부 확인
// 중복되는 값이 있으면 값이 합쳐짐

const mySet = new Set();
// mySet.add("value1");
// mySet.add("value2");
// mySet.add("value2");

// console.log(mySet.size); // 2

// // 존재여부 확인
// console.log(mySet.has("value1"));
// console.log(mySet.has("value2"));
// console.log(mySet.has("value3"));

// Iterator, 반복
mySet.add("value1");
mySet.add("value2");
mySet.add("value3");
mySet.add("value5");
mySet.add("value8");
for (const value of mySet.values()) {
  console.log(value);
}
