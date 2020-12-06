<template>
  <div id="detail">
    <detail-nav-bar @itemClick="navClick" :kilakila = "kilakila">
    </detail-nav-bar>

<scroll class="bscroll" ref="scroll" :probe-type="3" @back-top="bulingbuling" :pull-up-load="true">
   <detail-swiper :topimages="topimages">
    </detail-swiper>

<div class="neirong">
  <detail-base-info :goods="goods">
    </detail-base-info>

    <detail-shop-info :shop="shop">
    </detail-shop-info>
</div>
<ul>
  <li v-for="item in $store.state.cart">{{item}}</li>
</ul>
    <detail-goods :xiangqing="xiangqing" @imageload="imgload">
    </detail-goods>


    <detail-params-info :paramsinfo="paramsinfo" ref="chima">
    </detail-params-info>

    <detail-comment-info :commentinfo="commentinfo" ref="pingjia">
    </detail-comment-info>
    <goodlist :goods="recommend" ref="tuijian">
    </goodlist>
</scroll>
  <backtop @click="backclick" v-show="backdisplay"></backtop>
  <detailbottombar class="bottombar" @addshopping="addshopping">
  </detailbottombar>
   <div class="addtoacrt" v-show="isadd">
     {{iscartfont}}
   </div>
    
  </div>
</template>

<script>
import detailNavBar from './childmeds/childdetail'
import {getdetail,gettuijian,Goods,Shop,Itemparams} from 'network/detail.js'
import detailSwiper from './childmeds/detailSwiper'
import detailBaseInfo from   './childmeds/detailBaseInfo'
import DetailShopInfo from './childmeds/detailShopInfo.vue'
import detailbottombar from './childmeds/detailbottombar'
import backtop from 'components/content/backTop/backtop.vue'



import scroll from 'components/common/BetterScroll/betterscroll.vue'
import DetailGoods from './childmeds/detailGoods.vue'
import DetailParamsInfo from './childmeds/detailParamsInfo.vue'
import DetailCommentInfo from './childmeds/detailCommentInfo.vue'

import goodlist from 'components/content/goods/goodList.vue'

export default {
  components:{
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoods,
    DetailParamsInfo,
    DetailCommentInfo,
    goodlist,
    detailbottombar,
    backtop,
  },
  data() {
    return {
      iid:null,
      topimages:[],
      goods:{},
      shop:{},
      xiangqing:{},
      paramsinfo:{},
      commentinfo:{},
      recommend:[],
      scrolly:[0,],
      kilakila:0,
      backdisplay:false,
      isadd:false,
      iscartfont:null
    }
  },
  methods: {
    imgload(){
      // console.log(11);
      this.$refs.scroll.scroll.refresh()
    },
    addshopping(){
      // console.log(11);
      

      //商品详情添加到VUEX 来实现购物车功能
      let product = {}
      product.image = this.topimages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.$store.dispatch("addCart",product).then(res =>{
        this.isadd = true;
        this.iscartfont = res
        setTimeout(() =>{
          this.isadd = false
        },1000)
      })
    // console.log(product);
      
    },
    //监听滚动事件   判断在某个位置时 索引是几的变为高亮状态
    bulingbuling(position){

      let positionY = -position.y
      if(this.$refs.chima){
        if(positionY < this.$refs.chima.$el.offsetTop && positionY >= 0 && this.kilakila != 0){
        this.kilakila = 0
      }

      else if(positionY >= this.$refs.chima.$el.offsetTop && 
      positionY < this.$refs.pingjia.$el.offsetTop && this.kilakila != 1){
        this.kilakila = 1
      }
      
      else if(positionY >= this.$refs.pingjia.$el.offsetTop && 
      positionY < this.$refs.tuijian.$el.offsetTop && this.kilakila != 2){
        this.kilakila = 2;
      }
      
      else if(positionY >= this.$refs.tuijian.$el.offsetTop && this.kilakila != 3){
        this.kilakila = 3
      }
      if(positionY >= 2000){
        this.backdisplay = true;
      }else{
        this.backdisplay = false;
      }
      } 
      
    },
    backclick(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    navClick(index){
      this.scrolly[1] = (this.$refs.chima.$el.offsetTop)
      this.scrolly[2] = (this.$refs.pingjia.$el.offsetTop)
      this.scrolly[3] = (this.$refs.tuijian.$el.offsetTop)
      // console.log(this.scrolly);
      this.$refs.scroll.scroll.scrollTo(0,-this.scrolly[index],200)
    }
  },
  created() {
    // 当创建完成时赋值给this.iid当前活跃路由的iid
    // console.log(this.$route);
    this.iid = this.$route.params.iid
    getdetail(this.iid).then(res =>{
      // console.log(res);
      let data = res.result
      this.topimages = data.itemInfo.topImages;
      //创建商品信息实例对象
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
      // console.log(this.goods);
      //商家信息
      this.shop = new Shop(data.shopInfo)
      //商品详情
      this.xiangqing = data.detailInfo
      // console.log(data.itemParams.info);

      //商品参数信息
      this.paramsinfo = new Itemparams(data.itemParams.info,data.itemParams.rule)
      
      //评论信息
      this.commentinfo = data.rate;
      // console.log(this.commentinfo);

      //请求推荐数据
      gettuijian().then ((res)=>{
        this.recommend = res.data.list
        // console.log(this.recommend);
      })
    })
  },
  watch: {
    '$store.state.detailimgload':function(){
      this.$refs.scroll.scroll.refresh()
    }
  },
}
</script>
<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  } 
  .neirong{
    width: 96%;
    margin: 0 auto;
  }
  .bscroll{
    position: absolute;
    top: 44PX;
    right: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
  }
   /* .bottombar{
    background-color: pink;
    position: relative;
    height: 49px;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  } */
  .addtoacrt{
    text-align: center;
    border-radius: 25px;
    line-height: 40px;
    position: absolute;
    height: 40px;
    width: 60%;
    top: 70%;
    left: 20%;
    background-color: rgb(165, 158, 158);
    /* transition: all 1s; */
  }
</style>