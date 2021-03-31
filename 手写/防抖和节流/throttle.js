// function throttle(fn,cycle){
//   let start = Date.now();
//   let now;
//   let timer;
//   return function(){
//     now = Date.now();
//     clearTimeout(timer);
//     if(now - start >= cycle){
//       fn.apply(this,arguments);
//       start = now;
//     }else{
//       timer = setTimeout(()=>{
//         fn.apply(this,arguments);
//       },cycle);
//     }
//   }
// }


function throttle(fn,cycle){
  let canRun=true;
  return function(){
    if(!canRun){
      return;
    }
    canRun = false;
    setTimeout(()=>{
      fn.call(this,arguments);
      canRun = true;
    },cycle)
  }
}