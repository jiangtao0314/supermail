<template>
  <div>
    {{xiangqing.desc}}
    <div v-if="Object.keys(xiangqing).length != 0">
      {{xiangqing.detailImage[0].key}}
      <div v-for="item in xiangqing.detailImage[0].list">
      <img :src="item" alt="" class="xqimage" @load="imgload">
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:{
    xiangqing:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      content:0,
      imageload: 0,
    }
  },
  methods: {
    // 图片加载完成进行通信 让父元素调用scroll方法重新计算
    imgload(){
      // console.log(this.imageload -1);
      this.content++;
      if(this.content >= this.imageload -1){
        this.$emit('imageload')
      }
    }
  },
  //监听变量 获取图片的长度
  watch: {
    xiangqing(){
      // console.log(234);
      this.imageload = this.xiangqing.detailImage[0].list.length;
    }
  },
}
</script>

<style scoped>
  .xqimage{
    width:100%;
  }
</style>