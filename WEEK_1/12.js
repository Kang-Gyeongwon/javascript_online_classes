// 조건문의 중첩
let age = 20
let gender = "여성"

// 미성년자 구분
if (age >= 18) {
  if (gender === "여성") {
    console.log("성인 여성입니다.")
  } else {
    console.log("성인 남성입니다.")
  }
} else {
  if (gender === "여성") {
    console.log("미성년 여성입니다.")
  } else {
    console.log("미성년 남성입니다.")
  }
}
// 중첩문을 많이 쓰면 코드의 가독성이 떨어지고, 코드 유지 보수가 어려워지기 때문에 많이 쓰지 않는것이 좋지만
// 꼭 필요할때만 사용