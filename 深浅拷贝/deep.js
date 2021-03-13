// function deepClone(obj){
//   if(typeof obj!== 'object'){
//     return;
//   }
//   let newObj = obj instanceof Array?[] :{};
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       newObj[key]= typeof obj[key] === 'object'? deepClone(obj[key]): obj[key];
//     }
//   }
//   return newObj
// }

// console.log(deepClone([1,2,2,2]));
let deepClone=(obj)=>{
  if(typeof obj !== 'object') return false;
  let newObj= obj instanceof Array ? [] :{};
  for(let key in obj){
      if(obj.hasOwnProperty(key)){
          newObj[key]=typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
      }
  }
  return newObj
}
let arr = {
  a: 'one', 
  c:[1,5,6,9,3],
  b: ()=>{
    console.log()
  }
};
let arr1=deepClone(arr)
arr1.c.push(9)
console.log(arr1)