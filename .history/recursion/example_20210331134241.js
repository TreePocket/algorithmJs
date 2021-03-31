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
  return number * factorial(number - 1);
}


//斐波那契数
//迭代
function fibonacciIterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

//递归
function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//记忆化是一种保存前一个结果的值的优化技术，类似于缓存。 在分析计算fibonacci(5)时的调用发现fibonacci(3)被计算了两次，因此可以把fibonacci(3)存下来
function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  };
  return fibonacci(n);
}
// let res = fibonacciMemoization(5)
// console.log(res);