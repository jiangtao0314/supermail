<template>
  <div class="bottombar">
    <div class="icon">
      <div>客服</div>
      <div>店铺</div>
      <div>收藏</div>
    </div>
    <div class="shopping" @click="addshopping">
      加入购物车
    </div>
    <div class="buy">
      购买
    </div>
    
  </div>
</template>


<script>
export default {
  methods: {
    addshopping(){
      this.$emit("addshopping")
    }
  },
}
</script>
<style scoped>
  .bottombar{
    background-color: pink;
    position: absolute;
    height: 49PX;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    text-align: center;
    float: left;
    line-height: 49PX;
  }
  .icon{
    height: 100%;
    width: 50%;
    float: left;
  }
  .icon div{
    background-color: #eee;
    width: 33.3%;
    height: 100%;
    float: left;
    line-height: 49PX;
  }
  .shopping{
    background-color: yellow;
    height: 100%;
    width: 25%;
    float: left;
    text-align: center;
    line-height: 49PX;
  }
  .buy{
    background-color: hotpink;
    height: 100%;
    width: 25%;
    float: left;
    line-height: 49PX;
    text-align: center;
  }
</style>