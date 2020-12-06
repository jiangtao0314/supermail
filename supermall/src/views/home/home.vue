<template>
  <div class = 'home'>
    <navbar class = 'navhome'>
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </navbar>

<tab-control :titles ="['流行','新款','精选']"  @itemclick="tabclick" class="tabcontrolone" v-show="isfixed"
 ref="tabcontrol2"
>
  </tab-control>

<!-- 给组件添加点击事件时需添加.native  不然不生效 -->
<backtop @click.native="backClick" v-show="isdisplay"></backtop>

<scroll class="content" ref="scroll" :probe-type="3" @backTop="displaytop" :pull-up-load="true" @pullingUp="pullingUp">

  <home-swiper :banners = "banners" @swiperimgLoad = "swiperload">
  </home-swiper>

  <recommend-home :recommends = "recommends">

  </recommend-home>

  <feature-view/>
  
  <tab-control :titles ="['流行','新款','精选']" class="tab-control" @itemclick="tabclick" ref="tabcontrol">
  </tab-control>

  <good-list :goods="goods[currenttype].list">

  </good-list>

  </scroll>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
import scroll from 'components/common/BetterScroll/betterscroll.vue'

import TabControl from 'components/content/Tabcontrol/TabControl.vue'
import goodList from 'components/content/goods/goodList'
import backtop from 'components/content/backTop/backtop.vue'


import {getHomeMultidata,getHomeGoods} from 'network/home'


import HomeSwiper from './childComps/HomeSwiper'
import RecommendHome from './childComps/RecommendHome'
import featureView from './childComps/featureView.vue'

export default {
  components:{
    navbar,
    HomeSwiper,
    RecommendHome,
    featureView,
    TabControl,
    goodList,
    scroll,
    backtop,
  },
  
  //将所有数据存储到一个变量中
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currenttype:'pop',
      isdisplay:false,
      refresh:null,
      tabcontroly:0,
      isfixed:null,
      savey:0,
      aaa:false,
    }
  },
  created() {
    //向服务器发送请求
    this.getHomeMultidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.refresh = this.refreshdebounce(100);
    // console.log(this.$store.state.imgloading);
    this.isfixed = false;
  },
  activated() {
    //切换回活跃状态时立刻切换到之前保存的状态
    this.$refs.scroll.scroll.scrollTo(0,this.savey,0);
    //预防不能滚动
    this.$refs.scroll.scroll.refresh()
  },
  deactivated() {
    // 保存处于不活跃状态时的坐标
    this.savey = this.$refs.scroll.scroll.y;
  },

  methods: {
    //refresh专用防抖函数封装  传入this.$refs.scroll.scroll.refresh()后再使用会报错
    refreshdebounce(time){
      let timer = null;
      return function(...args){
        if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        // console.log(1);
       this.$refs.scroll.scroll.refresh()
      }, time);
      }
    },


//普通防抖函数
    debounce(fun,time){
      let timer = null;
      return function(...args){
        if(timer){
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        // console.log(1);
       fun()
      }, time);
      }
    },
    // 滚动到底部时向服务器发送请求
    pullingUp(){
      this.getHomeGoods(this.currenttype);
    },

    //监听滚动事件
    displaytop(position){
      //返回顶部按钮
      if(position.y<-1000){
        this.isdisplay = true
      }else{
        this.isdisplay = false
        // console.log(this.isdisplay);
      }
      //使用betterscroll 后会造成无法进行粘性定位  和fixed定位  只能新创建一个顶部导航栏  进行隐藏显示
      // this.aaa是防止首次加载时产生isfixed = true的阀门
      if(-position.y > this.tabcontroly && this.aaa == true){
        this.isfixed = true;
      }else{
        // console.log(-position.y);
        // console.log(this.tabcontroly);
        this.aaa = true
        this.isfixed = false;
      }
    },
    backClick(){
      // 点击返回按钮滚动到00坐标 用时500毫秒
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },


      //根据点击不同的列表标签显示不同的数据
    tabclick(index){
      switch(index){
        case 0:
          this.currenttype = 'pop'
          break
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
          break
      }
      this.$refs.tabcontrol.dot = index;
      this.$refs.tabcontrol2.dot = index;
    },
    //发送请求
    getHomeMultidata(){
     getHomeMultidata().then(res =>{
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })

    },
    //储存数据并使页码加一
    getHomeGoods(type){
      let page = this.goods[type].page +1
      getHomeGoods(type,page).then(res=>{
        // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
          //请求数据之后 结束上拉加载行为
          this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp()
      })
    },
    // 轮播图图片加载完成时  赋值tabcontrol距离上方的距离
    swiperload(){
      //每个组件中都有一个$el属性用来获取当前组件的元素内容  
      //获取当前字体rem大小  
      let a = window.getComputedStyle(document.documentElement)["fontSize"]
      let b = a.replace('px','')-0
      this.tabcontroly = this.$refs.tabcontrol.$el.offsetTop + b;
      // this.isfixed = true; 
      // console.log(this.tabcontroly);
    }
  },
  watch: {
    //使用watch监听VUEX的数据变化  一旦变化就调用这个函数
      '$store.state.imgloading':function(){
        this.refresh()
      }
  },
}
</script>

<style scoped>
.home{
  position: relative;
  height: 100vh;
}
   .navhome{
    color: white;
    font-size: 24px;
    background-color: pink;
  }
  .tab-control{ 
    /* 粘性定位 滚动到这个元素距离顶部44px的时候就自动变为绝对定位 */
    /* position: sticky;
    top:44px; */
    z-index: 2;
    background-color: white;
  }
  .content{
    position: absolute;
    top:44PX;
    bottom:49PX;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tabcontrolone{
    position: relative;
    /* top: 43px; */
    z-index: 10;

  }
</style>
