function fib(n){
  let n1=0,n2=1,sum;
  for(let i=0;i<n;i++){
    sum = (n1+n2) % 1000000007;
    n2=n1;
    n1=sum;
  }
  return n1;
}
console.log(fib(6))