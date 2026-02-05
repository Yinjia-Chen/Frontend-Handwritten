function deepClone(source) {
  if (source === null || typeof source !== 'object') return source;

  let cloned = Array.isArray(source)
    ? []
    : Object.create(Object.getPrototypeOf(source));
  
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      cloned[key] = deepClone(source[key]);
    }
  }
  return cloned;
}

export default deepClone;
