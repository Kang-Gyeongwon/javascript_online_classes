// while문
// while (조건) {
//   // main logic
//   // 여기서 증감
// }
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Q. while문을 활용해서, 3 초과 100 미만의 숫자 중 5의 배수인 것만 출력
// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i);
//   }
//   i++;
// }

// do - while문
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// break continue문
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
/*
0
1
2
3
4
*/
// break문을 만나면 for문을 스탑
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
/*
0
1
2
3
4
6
7
8
9
*/
// continue를 만나면 그 다음순서로 넘어감