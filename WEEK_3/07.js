// undefined
let a;
console.log(a); // undefined

const obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // undefined

const func = () => {};
const c = func();
console.log(c); // undefined

// null
const n = null;
console.log(typeof n); // object

// 동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // ture

// 일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
