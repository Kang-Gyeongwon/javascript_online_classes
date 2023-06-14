const copyObject = (target) => {
  let result = {};

  for (let prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 예제에 적용하기
let user = {
  name: "wonjang",
  gender: "male",
};

let user2 = copyObject(user);
user2.name = "twojang";

if (user !== user) {
  console.log("유저 정보가 변겨오디었습니다.");
}

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); //wonjang twojang
console.log(user === user2);  // false

// 이러한 얕은 복사 패턴에도 문제가 있음
// 중첩된 객체에 대해서는 완벽한 복사를 할 수 없기 때문.
