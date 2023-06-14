// user 객채를 생성
let user = {
  name: "wonjang",
  gender: "male",
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경! => 가변
const changeName = (user, newName) => {
  // 2개 인자를 받음.
  // 첫번째 user => user객체는 이름과 성을 포함하고 있음
  // 두번째 newName
  let newUser = user; // 인자로 받은 user객체 복사(할당하는 방식으로)
  newUser.name = newName;  // 새롭게 만든 복사한 newUser의 속성에 접근해서 새로운 이름을 할당
  return newUser;
};

// 변경한 user정보를 user2 변수에 할당
// 가변이기 때문에 user1도 영향을 받게됨
const user2 = changeName(user, "twojang");

// 결국 아래 로직은 skip하게 됨
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // twojang twojang
console.log(user === user2); // true  => 가변성의 문제점
