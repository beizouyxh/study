var search = function(nums, target) {
  let len=nums.length;
  let result = nums.slice(target,len).concat(nums.slice(0,target));
  if(result.includes(target)){
    return true
  }else{
    return false
  }
};

console.log(search([2,5,6,0,0,1,2],0))