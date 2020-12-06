<template>
  <div>
    <div class="bottombar">
      <div class="check-box" @click="allclick" :class="{clickbox:clickalls}">
          <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <span>全选</span>
      <span>总价格:{{totalprice}}</span>
      <span class="jiesuan" >结算</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickall:true 
    }
  },
  methods: {
    allclick(){
      this.clickall = !this.clickall
      // console.log(this.clickall);
      this.$store.state.cart.forEach(value => {
        if(this.clickall){
          this.$store.commit('changeall',this.clickall)
        }else{
          this.$store.commit('changeall',this.clickall)
        }
      })
     

    }
  },
  computed:{
    totalprice(){
      let b = 0
      this.$store.state.cart.filter(item =>{
        return item.checked
      }).forEach(element => {
        b += element.price * element.count
      });

      return "￥" + b.toFixed(2)
    },

    //全选按钮判断
    clickalls(){
      

    //自己方法  繁琐
    let num = 0
    this.$store.state.cart.forEach(item =>{
      if(item.checked == false){
        num++;
      }
    })
      if(num == 0 && this.$store.state.cart.length != 0){
        return true
      }else{
        return false
      }

      //判断购物车有没有数据 如果没有就返回false
      // if(this.$store.state.cart.length == 0){
      //   return false
      // }

      //老师方法 遍历全部数组 查找符合条件的数组 并返回一个新的数组  
      //判断这个新数组的长度  如果有就数字取反为false  没有就0取反为true
      // return !this.$store.state.cart.filter(item =>{
      //     return item.checked == false
      // }).length


      // 老师方法 使用some查找 找到一个checked是false的数据时
      //  就退出查找并返回false 让全选按钮取消全选
      // return !this.$store.state.cart.some(item =>{
      //   return item.checked == false
      // })
    }
  }
}
</script>
<style scoped>
  .bottombar{
    height: 40PX;
    width: 100%;
    position: absolute;
    bottom: 49PX;
  }
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
  .bottombar span{
    line-height: 40PX;
    font-size: 18px;
    margin-left: 15px;
  }
  .jiesuan{
    background-color: red;
    color: white;
    float: right;
    display: block;
    height: 40PX;
    width: 70px;
    text-align: center;
  }
</style>