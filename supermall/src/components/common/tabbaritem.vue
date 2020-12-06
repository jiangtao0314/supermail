<template>
      <div class="tab-bar-item" @click="itemclick">
        <div v-if="!isActive">
          <slot name="img"></slot>
        </div>
        <div v-else>
          <slot name="img-active"></slot>
        </div>
        <div :class="{textactive:isActive}">
          <slot name = "text"></slot>
        </div>
      </div>
</template>

<script>
export default {
  name:"tabbaritem",
  data() {
    return {
      // isActive:false
    }
  },
   methods: {
    itemclick(){
      this.$router.push(this.path)
    }
  },
  //在此时APP.vue是父元素  这个为子元素
  props:{
    path:String
  },
  computed: {
    isActive(){
      //判断当前活跃的路由中活跃路由的位置  输出路由个数的布尔值
      //渲染时 只把布尔值为true的组件添加类名并设置红色
      // console.log(this.$route.path.indexOf(this.path) !== -1);
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
}
 
</script>
<style>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);  
  }
  #tab-bar>a{
    text-decoration: none;
    display: flex;
    flex: 1;
  }
  .tab-bar-item{
    height: 49px;
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
  .textactive{
    color: red;
  }
</style>