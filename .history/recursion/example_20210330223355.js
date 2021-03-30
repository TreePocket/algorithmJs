//计算一个数的阶乘
//迭代阶乘
function factoriaIterative(number) {
  if (number < 0) {
    return undefined;
  }
  let total = 1;
  for (let i = number; i > 0; i--) {
    total = total * i;
  }
  return total;
}

//递归阶乘
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return factorial(number--);
}