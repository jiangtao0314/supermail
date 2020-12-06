<template>
  <div class ="goodlist">
    <good-list-item v-for="item in goods" :goodsitem = 'item'>
    </good-list-item>
  </div>
</template>
<script>

import goodListItem from './goodListItem'

export default {
  components:{
    goodListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style>
  .goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
    
  }
</style>