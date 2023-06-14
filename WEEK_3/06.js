const copyObjectDeep = (target) => {
  let result = {};
  if (typeof target === "object" && target !== null) {
    for (let prop in target) {
      // 수행을 하지만 얕은복사와 다르게 자기자신을 수행함 =>재귀적 수행
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

//결과 확인
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);  // { a: 1, b: { c: null, d: [ 1, 2 ] } }
console.log(obj2);  // { a: 3, b: { c: 4, d: { '0': 1, '1': 3 } } }
