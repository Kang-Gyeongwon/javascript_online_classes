// user 객채를 생성
let user = {
  name: "wonjang",
  gender: "male",
};

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티에 접근하는 것이 아니라, 아예 새로운 객체를 반환 => 불변
const changeName = (user, newName) => {
  // 기존은 새로운 객체를 복사해서 속성을 접근해서 변경하는 방식으로 변경
  // 밑에 함수는 항상 새로운 객체를 생성해서 return하게 됨
  // 이 방법이 좋은 방법은 아니고 문제점이 발생함
  // 지금은 속성이 2개니깐 괜찮지만 속성 양이 많아지면 하드 코딩이 너무 많아짐
  // 이러한 이유때문에 얕은 복사라는 방법을 사용하게됨
  return {
    name: newName,
    gender: user.gender,
  };
};

// 변경한 user정보를 user2 변수에 할당
// 가변이기 때문에 user1도 영향이 없음
const user2 = changeName(user, "twojang");

// 결국 아래 로직이 실행됨
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // wonjang twojang
console.log(user === user2); // false
