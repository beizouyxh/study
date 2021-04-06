class Promise{
  constructor(executor){
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];
    const resolve = (value)=>{
      if(this.state === 'pending'){
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallback.forEach(fn =>fn())
      }
    }
    const reject = (reason)=>{
      if(this.state === 'pending'){
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallback.forEach(fn => fn())
      }
    }
    executor(resolve,reject)
  }

  then(onFulfilled,onRejectd){
    // console.log(this.state) //pending
    const promise2 = new Promise((resolve,reject)=>{
      if(this.state === 'fulfilled'){
        resolve(onFulfilled(this.value))
      }
  
      if(this.state === 'rejected'){
        reject(onRejectd(this.reason))
      }
  
      if(this.state === 'pending'){
        this.onFulfilledCallback.push(()=>{
          onFulfilled(this.value);
        })
        this.onRejectedCallback.push(() =>{
          onRejectd(this.reason)
        })
      }
    })
    return promise2
  }
}


let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('延迟1秒 成功啦~')
  }, 1000)
})
p.then(data => {
  let str = data + '我再第一个 then 里哦'
  console.log(str)
  return new Promise((resolve, reject) => {
    resolve(str)
  })
}).then(data => {
  let str = data + '我在第二个 then 里哦'
  console.log(str)
})

