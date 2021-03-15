const Set = require('./set');
// const set = new Set();
// set.add(1);
// console.log(set.values()); // 输出[1] 
// console.log(set.has(1)); // 输出 true 
// console.log(set.size()); // 输出 1  
// set.add(2); console.log(set.values()); // 输出[1, 2] 
// console.log(set.has(2)); // 输出 true
// console.log(set.size()); // 输出 2  
// set.delete(1);
// console.log(set.values()); // 输出[2]
// set.delete(2);
// console.log(set.values()); // 输出[]

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(34);

const intersectionAB = setA.union(setB);
console.log(intersectionAB.values());