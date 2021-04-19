function maxDepth(root){
  if(!root){
    return 0;
  }
  function loop(node,depth=1){
    if(!node){
      return depth-1;
    }
    if(!node.left && !node.right){
      return depth
    }
    let leftNode = loop(node.left,depth+1);
    let rightNode = loop((node.right,depth+1);
    return Math.max(leftNode,rightNode);
  }
  return loop(root);
}