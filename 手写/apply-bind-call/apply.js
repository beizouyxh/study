//apply 参数为数组

Function.prototype.myApply = function(target){
  if(typeof this !=="function"){
    throw new TypeError('not a function');
  }
  if(!Array.isArray(arguments[1])){
    throw new TypeError('arg not a array');
  }
  target = target || window;
  target.fn = this;
  let args = arguments[1];
  let result=target.fn(args)
  return result
}

const obj={number:123}
function foo(...args){
  console.log("s1" + args);
}

foo.prototype.name=123;
const s1=[1,2,3,4];
const s = foo.myApply(obj,s1);
