// 일급객체로써의 함수(4)
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTwo = multiplyBy(2); // num 자리에 2가 할당됨
const multiplyByThree = multiplyBy(3);
// 리팩토링 함수를 만들어서 반복되는 코드에 대한 처리를 해줌

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`);  // FINAL => 40
