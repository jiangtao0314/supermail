<template>
  <div id="nav">
     <router-view v-slot="{ Component }">
       <!-- keepalive排除detail -->
  <keep-alive include="detail">
    <component :is="Component" />
  </keep-alive>
</router-view>
<maintabbar>
  
</maintabbar>
  </div>
</template>
  <script>
  
  import maintabbar from 'components/content/tabbar'

  export default {
    components:{
      maintabbar
    }
  }
  </script>
<style>
@import "./assets/css/base.css";

</style>
