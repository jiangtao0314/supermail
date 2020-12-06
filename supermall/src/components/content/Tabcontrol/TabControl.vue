<template>
<div class="tab-control">
    <span  v-for="(item,index) in titles"
    :class="{active:index == dot}" @click="aclick(index)">
      {{item}}
       <div class="line"></div>
    </span>
    
   
</div>
 
</template>
<script>
export default {
  data() {
    return {
      dot:0,
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods: {
    aclick(index){
      this.dot = index;
      this.$emit('itemclick',index)
    }
  },
}
</script>
<style>
  .tab-control{
    height: 44PX;
    display: flex;
    text-align: center;
    line-height: 44px;
  }
  .tab-control span{
    flex: 1;
  }
  .active{
    border-bottom:4px solid pink ;
    color:pink;
    transition: all .4s;
    
  }
</style>