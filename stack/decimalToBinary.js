// import Stack from "./stack.js";
var Stack = require('./stack.js');
function decimalToBinary(decNumber, base) {
  const remStack = new Stack();
  let num = decNumber;
  let rem;
  let binaryString = "";
  const digitArr = '0123456789ABCDEFG';
  if (base > 16 || base < 2) {
    return
  }
  while (num > 0) {
    rem = Math.floor(num % base);
    remStack.push(rem);
    num = Math.floor(num / base);
  }
  while (!remStack.isEmpty()) {
    let temp = remStack.pop();
    binaryString += digitArr[temp];
  }
  return binaryString;
}
let str = decimalToBinary(100, 10);
console.log(str)