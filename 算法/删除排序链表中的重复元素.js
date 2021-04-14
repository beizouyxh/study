function deleteDuplicates(head){
  if(!head){
    return;
  }
  let cur = head;
  while(cur.next){
    if(cur.val === cur.next.val){
      cur.next = cur.next.next;
    }else{
      cur = cur.next;
    }
  }
  return head
}