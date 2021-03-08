const Queue = require('./queue');

require('./queue');
//模拟击鼓传花
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  //将参与游戏的人入队
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  //当队内人数>1时 循环模拟传花
  while (queue.size() > 1) {
    //循环num次传花 将最后一人淘汰
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }
  return {
    elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.elimitatedList.forEach(name => { console.log(`${name}在击鼓传花游戏中被淘汰。`); });
console.log(`${result.winner}赢了`)