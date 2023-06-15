// undefined
let a;
console.log(a);  // undefined

const obj = { a: 1 };
console.log(obj.a);  // 1
console.log(obj.b);  // undefined

const func = () => {};
const c = func();
console.log(c);  // undefined
