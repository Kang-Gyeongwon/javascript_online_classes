// copyObject는 target(객체)를 받음
const copyObject = (target) => {
  let result = {};

  // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 잇음
  // 하드코딩을 하지 않아도됨
  // 이 copyObject로 복사를 한다음, 복사를 완료한 객체의 프로퍼티를 변경하면됨
  for (let prop in target){
    result[prop] = target[prop]
  } 
  return result
};
