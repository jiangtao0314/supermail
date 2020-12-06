<template>
  <div class ='nav-bar'>
    <div class = 'left'>
      <slot name="left"></slot>
    </div>
    <div class = 'center'>
      <slot name='center'></slot>
      </div>
    <div class = 'right'>
      <slot name = 'right'></slot>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
    .nav-bar{
      /* position: fixed; */
      z-index: 2;
      /* left: 0; */
      /* right: 0; */
      /* top: 0; */
      display: flex;
      height: 44PX;
      text-align: center;
      line-height: 44px;
    }
    .left,.right{
      width: 60px;
    }
    .center{
      flex:1;
    }
</style>