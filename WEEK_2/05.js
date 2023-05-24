// 일급객체로써의 함수(2)
// 객체 안에서 함수
const person = {
  naem: "John",
  age: 31,
  isMarried: true,
  // sayHello: function () {
  //   console.log(`Hello, My name is ${this.naem} `);
  // },
  sayHello: () => {
    console.log(`Hello, My name is ${this.naem} `); // undefined가 출력됨
  },
};

// this => 항상 자기 자신을 가리킴
// {중괄호(스코프)} 안에서의 this는 자기자신을 가리킴
person.sayHello();
