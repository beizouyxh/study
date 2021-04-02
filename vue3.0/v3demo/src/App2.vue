<template>
<div>
  <form>
    <input type="text" v-model="stu.id">
    <input type="text" v-model="stu.name">
    <input type="text" v-model="stu.age">
    <input type="submit" @click="addStu">
  </form>
  <ul>
    <li v-for="(stu,index) in stus" :key="stus.id" @click="removeStu(index)">
    {{stu.name}} -- {{stu.age}}
  </li>

  </ul>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data:function(){
    return{
      stus:[
        {id:1,name:"ss",age:10},
        {id:2,name:"xx",age:100},
        {id:3,name:"cc",age:1000},
      ],
      stu:{
        id:'',
        name:'',
        age:'',
      }
    }
  },
  methods:{
    removeStu(index){
      this.stus= this.stus.filter((stu,idx) => idx!==index);
    },
    addStu(e){
      e.preventDefault();
      const stu = Object.assign({},this.stu);
      this.stus.push(stu);
      this.stu.id='';
      this.stu.name='';
      this.stu.age='';
    }
  }
}
</script>
