<template>
  <div>
    <navbar class="navbar" v-slot:center>
      <div>购物车({{$store.state.cart.length}})</div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
export default {
  components:{
    navbar
  }
}
</script>

<style>
  .navbar{
    width: 100%;
    height: 44PX;
    background-color: pink;
    text-align: center;
    line-height: 44PX;
  }
  
</style>