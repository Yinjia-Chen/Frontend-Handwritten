import myInstanceOf from './instanceof.js';

console.log(myInstanceOf(1, Object));
// console.log(myInstanceOf({}, 1));
console.log(myInstanceOf(null, Object));
console.log(myInstanceOf([], Object));
console.log(myInstanceOf({}, Array));
console.log(myInstanceOf([], Array));
console.log(myInstanceOf(new Map(), Map));
