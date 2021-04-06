function removeDuplicates(nums){
  let slow=0;
  for(let fast=1;fast<nums.length;fast++){
    if(nums[slow] !== nums[fast]){
      slow++;
      nums[slow] = nums[fast]
    }
  }
  return slow+1
}

console.log(removeDuplicates([0,1,1,1,1,2,2,3,3,5]))