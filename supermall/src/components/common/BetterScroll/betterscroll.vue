<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)
BScroll.use(ObserveDOM)
  
export default {

props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },

  data() {
    return {
      scroll :null
    }
  },

 mounted() {
  //  闭合小括号要加载大括号之后
    this.scroll = new BScroll(this.$refs.wrapper,{
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad,
    observeDOM: true,
    // scrollX:true,
    useTransition: true,
    useTransform: true,
    click:true,
    eventPassthrough:'horizontal',
    })
    // setInterval(function(){
    //   console.log(1);
    // },10)
    this.scroll.on('scroll',(position)=>{
      this.$emit('backTop',position)
    })
    this.scroll.on('pullingUp', ()=>{
      this.$emit('pullingUp')
    })
  },

  // updated() {
  //   setTimeout(()=>{
  //     this.scroll.refresh()
  //   },500)
  // },
  }
</script>
<style scoped>

</style>