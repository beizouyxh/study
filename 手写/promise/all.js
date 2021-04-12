function myAll(promises){
  return new Promise((resolve,reject)=>{
    let count = 0;
    let res = [];
    for(let i =0;i<promises.length;i++){
      promises[i].then(x =>{
        count ++ ;
        res[i] = x;
        if(count = promises.length){
          resolve(res)
        }
      }).catch(err =>{
        console.log(err);
      })
    }
  })
}

let o = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      reject(6);
  },1000)
})

let p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve(6666);
  },2000)
})

myAll([p,o]).then(x=>{console.log(x)});