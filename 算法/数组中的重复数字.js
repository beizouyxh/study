var findRepeatNumber = function(nums) {
  // for(let i=0;i<nums.length;i++){
  //   for(let j=i+1;j<nums.length;j++){
  //     if(nums[i] === nums[j]){
  //       return nums[i]
  //     }
  //   }
  // }
  // return -1
  let set = new Set()
  for(let i of nums){
    if(set.has(i)) return i;
    set.add(i);
  }
  return null
};

console.log(findRepeatNumber([0,1,2,3,1,2]))