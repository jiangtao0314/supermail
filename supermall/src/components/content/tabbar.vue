<template>
  <div>
    <tab-bar>
      <!-- 如果把tab-bar写入到组件中  每次创建都会创建一个flex为1的盒子 图标在中间多个盒子进行覆盖 -->
      <div id="tab-bar">
        
      <!-- 此时path传递的为一个字符串而不是变量  不需要使用V-BIND绑定 -->
      <tabbaritem path="/home">
        <template v-slot:img>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>

        <template v-slot:img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>

        <template v-slot:text>
          <span>首页</span>
        </template>
      </tabbaritem>

      <tabbaritem path="/category">
        <template v-slot:img>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>

        <template v-slot:img-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>

        <template v-slot:text>
          <span>分类</span>
        </template>
      </tabbaritem>

      <tabbaritem path="/shopcart">
        <template v-slot:img>
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>

        <template v-slot:img-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>

        <template v-slot:text>
          <span>购物车</span>
        </template>
      </tabbaritem>

      <tabbaritem path="/profile">
        <template v-slot:img>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>

        <template v-slot:img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>

        <template v-slot:text>
          <span>我的</span>
        </template>
      </tabbaritem>
      </div>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/app'
import tabbaritem from'../common/tabbaritem'

export default {
  name: 'App',
  components:{
    TabBar,
    tabbaritem
  }
}
</script>

<style scoped>
</style>