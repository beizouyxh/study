
function lengthOfLongestSubstring(s){
  let arr=[];max=0;
  for(let i =0;i<s.length;i++){
    let index = arr.indexOf(s[i]);
    if(index !==-1){
      arr.splice(0,index+1);
    }
    arr.push(s.charAt(i));
    console.log(arr,"arr")
    max = Math.max(arr.length,max);
  }
  return max;
}



// function lengthOfLongestSubstring2(s){
//   let index=0,max=0;
//   for(let i=0,j=0;j<s.length;j++){
//     index = s.substring(i,j).indexOf(s[j]);
//     if(index !==-1){
//       i= i + index +1;
//     }
//     max = Math.max(j-i+1,max);
//   }
//   return max
// }
console.log(lengthOfLongestSubstring("asdqweswxdfxad"))