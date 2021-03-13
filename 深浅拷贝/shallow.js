// function shallowCopy(obj){
//   //只拷贝对象
//   if(typeof obj !== 'object'){
//     return;
//   }
//   //根据obj的类型判断是新建一个数组还是对象
//   let newObj = obj instanceof Array? []:{};
//   //遍历obj，并且判断是obj的属性才拷贝
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj
// }

// console.log(shallowCopy({a:1,b:2}));

//闭包
var a = 0
function foo(){
    var b =14
    function fo(){
        console.log(a, b)
    }
    fo()
}
foo()