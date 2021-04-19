function clmb(n){
  if(n === 0 ){
    return;
  }
  if(n===1){
    return 1
  };
  let i=0;
  return clmb(i+1,n)
}