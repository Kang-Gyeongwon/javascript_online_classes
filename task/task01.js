// 컴퓨터 임의 생산 숫자
let computerNum = randomNum();

// 사용자 입력 횟수
let conut = 0;

// 사용자로부터 입력받기
const inputNum = () => {
  const guest = prompt("세개의 숫자를 입력하시요!");

  // 유효성 검사하기
  if (isTrueNum(guest)) {
    conut++;
  }
};

// 유효성 검사 함수
const isTrueNum = (guest) => {
  // 3자리 숫자인지 정규식으로 확인하기
  return /^\d{3}$/.test(guest);
};

const randomNum = () => {
  let numbers = {};
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.join("");
};

console.log(computerNum);
