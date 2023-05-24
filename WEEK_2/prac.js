// 문자열로 구성된 리스트 strings와 정수 n이 주어졌을 때, 각 문자열의 인덱스n번째 글자를 기준으로 오름차순 정렬
// strings의 원소는 길이 1이상, 100이하인 문자열
// strings의 원소 길이는 n보다 큼
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로

// 내가 푼답
const func = (string, n) => {
  return string.sort((a, b) => {
    // if (a[n] > b[n]) {
    //   return 1;
    // } else if (a[n] < b[n]) {
    //   return -1;
    // } else if (a[n] === b[n]) {
    //   if (a < b) {
    //     return -1;
    //   }
    //   if (a > b) {
    //     return 1;
    //   }
    // } else {
    //   return 0;
    // }
    return a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : a > b ? 1 : -1;
  });
};

// const str1 = ["sun", "bed", "car"];
// const num1 = 1;
// console.log(func(str1, num1));
// const str2 = ["abce", "abcd", "cdx"];
// const num2 = 2;
// console.log(func(str2, num2));

// 문제풀이 답안
function solution(strings, n) {
  var answer = [];

  // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
    // car -> a + car -> acar
  }

  // console.log(strings); // [ 'usun', 'ebed', 'acar' ]

  // 2. 해당 배열을 사전순으로 정렬(sort)
  strings.sort();
  // console.log(strings); // [ 'acar', 'ebed', 'usun' ]

  // 3. 앞글자 제거 후 리턴
  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    answer.push(strings[j]);
  }
  // console.log(`answer, ${answer}`); // answer, car,bed,sun

  return answer;
}

// solution(["sun", "bed", "car"], 1);
