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
