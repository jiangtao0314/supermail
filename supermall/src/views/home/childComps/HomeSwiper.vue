<template>
  <div class="home-swiper">
     <swiper>
      <swiper-item v-for="(item,key) in banners" :key=key>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperimgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
export default {
  components:{
    Swiper, 
    SwiperItem

  },
  data() {
    return {
      load:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods: {
    swiperimgLoad(){
      
      if(this.load !== true){
        this.$emit('swiperimgLoad');
        this.load = true;
      }
      
    }
  },
}
</script>
<style>
  .home-swiper{
    margin-top:44px;
  }
</style>