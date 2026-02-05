function myInstanceOf(A, B) {
  if (A == null || (typeof A !== 'object'  && typeof A !== 'function')) return false  
  
  if(B == null || typeof B !== 'function' ) throw new TypeError('右侧参数类型错误')  

  let proto = Object.getPrototypeOf(A);
  const prototype = B.prototype;

  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

export default myInstanceOf;