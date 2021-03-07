function searchArr(arr,target){
  let temp = arr[0,arr.length - 1];
  let i = 0,j = arr.length - 1;
  while(i>=0&&j>=0&&i<arr[0].length&&j<arr.length){
    if(target == temp){
      return true;
    }
    if(temp > target) {
      i++;
    }
    if(temp < target) {
      j--;
    }
    temp = arr[i,j];
  }
  return false;
}

console.log(searchArr([[1,2,3],[4,5,6],[7,8,9]],6));