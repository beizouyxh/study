Function.prototype.myCall = function (target,...args){
  //this 指向调用myCall函数的对象
  if(typeof this !=="function"){
    throw new TypeError("not a function")
  }
  target = target || window;
  target.fn = this;
  let result = target.fn(...args);
  return result
}

let obj = {name: "beizou"}
function foo(...args){
  console.log(args) 
}

let s = foo.myCall(obj,"xiaoming","xiaohong")