function findMost (arr){
  let h={};
  let maxNum = 0;
  var maxEle = null;
  for(let i=0;i<arr.length;i++){
    let a = arr[i];
    // console.log(h[a]);
    h[a] === undefined ? h[a] =1 : (h[a]++)
    console.log(h[a])
    if(h[a] > maxNum){
      maxEle = a;
      maxNum = h[a]
    }
  }
  return '出现最多的元素是:' + maxEle + ',出现次数为：' + maxNum;
}

console.log(findMost([1,2,3,3,3,4,4]));