const Set = require('./set');
const set = new Set();
set.add(1);
console.log(set.values()); // 输出[1] 
console.log(set.has(1)); // 输出 true 
console.log(set.size()); // 输出 1  
set.add(2); console.log(set.values()); // 输出[1, 2] 
console.log(set.has(2)); // 输出 true
console.log(set.size()); // 输出 2  
set.delete(1);
console.log(set.values()); // 输出[2]
set.delete(2);
console.log(set.values()); // 输出[]