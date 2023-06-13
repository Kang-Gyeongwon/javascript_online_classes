// 사용자 입력 횟수
let count = 0;

// 유효성 검사 함수
const isTrueNum = (guess) => {
  // 3자리 숫자인지 정규식으로 확인하기
  return /^\d{3}$/.test(guess);
};

// 숫자 0 - 9까지 랜덤으로 만드는 함수
const randomNum = () => {
  let numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.join("");
};
// 컴퓨터 임의 생성 숫자
let computerNum = randomNum();

// 스트라이크와 볼 확인 함수
const strikeOrBall = (guess) => {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === computerNum[i]) {
      strikes++;
    } else if (computerNum.includes(Number(guess[i]))) {
      balls++;
    }
  }
  return { B: balls, S: strikes };
};


// 게임 시작하기
while (true) {
  count++;

  // 입력 받기
  const guess = prompt(`${count}번째 시도!`);

  // 유효성 검사하기
  if (isTrueNum(guess)) {
    // 스트라이크, 볼 확인
    const result = strikeOrBall(guess);

    console.log(`${result.B}B${result.S}S`);

    // 게임 종료
    if (result.S === 3) {
      console.log(`게임을 종료합니다. ${count}번만에 맞히셨습니다.`);
      break;
    }
  } else {
    console.log("잘못된 입력입니다. 다시 시도해주세요.");
  }
}
