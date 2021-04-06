//进阶版
function removeDuplicates(nums){
  let len = nums.length;
  if(len <=2){
    return len;
  }
  let slow =2;
  let fast=2;
  while(fast<len){
    if(nums[slow-2] !== nums[fast]){
      nums[slow] = nums[fast];
      ++slow
    }
    ++fast
  }
  return slow
}

console.log(removeDuplicates([0,1,1,1,2,2,2,3,3,4,4,5]))