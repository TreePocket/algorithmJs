//回文检查器  检查回文数可以用栈 可以用反转字符串判断  在数据结构中最简单的是使用双端队列
require('./deque');
function palindromicChecker(aString) {
  if (aString === undefined || aString === null || aString == '') return false;
  const deque = new Deque();
  //对字符串转小写去空格处理
  const lowerString = aString.toLocaleLowerCase().split(" ").join("");
  let isEqual = true;//判断标记
  let firstChar, lastChar;
  //入队
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  //前后出队 如果两个元素不相等 判断标记为false 
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }
  return isEqual;
}