<template>
  <div class="cartlist">
    <scroll class="cartscroll">
      <div class="father">
        <div v-for="item in $store.state.cart" class="cartitem clearfix" >
          <div class="check-box" @click="boxclick(item)" :class="{clickbox:item.checked}">
            <img src="~assets/img/cart/tick.svg" alt="">
          </div>
          <img :src="item.image" alt="" class="spimg">
          <div class="carttitile">{{item.title}}</div>
          <div class="cartprice">￥{{item.price}}</div>
          <div class="cartcount">x{{item.count}}</div>
          <!-- <div>{{item}}</div> -->
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>

import scroll from 'components/common/BetterScroll/betterscroll.vue'

export default {
  data() {
    return {
      date:this.$store.state.cart.length
    }
  },
  components:{
    scroll
  },

  methods: {
    boxclick(item){
      item.checked = !item.checked
    }
  },
}
</script>
<style scoped>
/* 因为cartlist里不包括顶部和底部导航栏 */
.cartlist{
  height: calc(100vh - 44px - 49px);
}
  .cartscroll{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
  }
  .father{
    height: 100%;
    width: 100%;
  }
  .cartitem{
    position: relative;
    height: 20vh;
    width: 100%;
    border-bottom: 1px solid gray;
  }
  /* .checkclick{
    background-image: url(~assets/img/cart/tick.svg);
    background-color: pink;
  } */
  .check-box{
    float: left;
    position: relative;
    top:50%;
    left: 5px;
    border: 1px solid black;
    border-radius: 50%;
    transform: translateY(-50%);
    /* transform: translateY(-50%); */
    /* vertical-align:middle; */
    height: 25px;
    width: 25px;
  }
  .clickbox{
    background-color: pink;
  }
  .check-box img{
    height: 100%;
    width: 100%;
  }
   .cartitem input::before{
     content: "";
     border-radius: 25%;
   }
  .spimg{
    height: 80%;
    /* width: 20%; */
    float: left;
    padding:15px
  }
  .carttitile{
    padding-top: 15px;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    font-size: 16px;
  }
  .cartprice{
    display: inline-block;
    padding-top: 11vh;
    font-size: 23px;
    color: orange;
  }
  .cartcount{
    float: right;
    padding-top: 11vh;
    padding-right: 2vh;
    font-size: 20px;
  }
</style>