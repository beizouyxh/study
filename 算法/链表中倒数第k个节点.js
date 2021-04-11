
var getKthFromEnd = function(head, k) {
  let nodeLength =  0;
  let headI = head;
  let nodeMap = new Map();
  while(headI !==null){
      nodeMap.set(nodeLength,headI);
      headI = headI.next;
      nodeLength++;
  }
  return nodeMap.get(nodeLength-k);
};

getKthFromEnd([1,2,3,4,6],2)