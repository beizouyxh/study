<template>
  <div>{{count}}</div>
  <button @click="myFn">按钮</button>
</template>
<script>
import {ref} from 'vue';

export default{
  name:'App3',
  setup() {
    let count = ref(0);
    function myFn(){
     count.value +=1;
    }
    return{count,myFn}
  },
}
</script>
<style scoped>

</style>
