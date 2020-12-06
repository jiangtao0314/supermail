<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topimages">
      <img :src="item" alt="" class="swiperimg">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topimages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 60vh;
    overflow: hidden;
  }
  .swiperimg{
    width: 100%;
  }
</style>
