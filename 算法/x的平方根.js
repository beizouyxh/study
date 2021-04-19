function sqrt(x){
  if(x<2) return x;
  let left=1,right = x,mid;
  while(right-left>1){
    mid = Math.floor((left+right)/2);
    if(mid  === x/mid){
      return mid;
    }else if(mid > x/mid){
      right = mid;
    }else{
      left = mid;
    }
  }
  return left;
}

console.log(sqrt(8))