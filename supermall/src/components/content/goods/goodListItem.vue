<template>
    <div class="goodlistitem" @click="itemClick">
      <!-- <div>{{goodsitem.image}}</div> -->
        <img :src="showImage" alt="" @load="imgload">
    <div>
      <p class="spname">{{showTitle}}</p>
      <span class="price">{{showPrice}}</span>
      <span class="xing">☆</span><span class="shoucang">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script> 
import { createStore } from 'vuex';
export default {
  props:{
    goodsitem:{
      type:Object,
    }
  },
  computed: {
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img  
    },
    showTitle(){
      return  this.goodsitem.title || this.goodsitem.props[0]  
    },
    showPrice(){
      return this.goodsitem.orgPrice || '￥'+this.goodsitem.discountPrice
    }
  },
  methods: {
    imgload(){
      // console.log(this.$route.path.indexOf('/detail'));
      // console.log(this.$route);
      if(!this.$route.path == '/home'){
        this.$store.commit('homeloadimg')
      }else if(!this.$route.path.indexOf('/detail')){
        this.$store.commit('detailload')
      }
      
    },
    itemClick(){
      // console.log(1);
      let push2 = '/detail/'+ this.goodsitem.iid
      let push1 = '/detail/'+ this.goodsitem.item_id
      if(this.goodsitem.iid){
        this.$router.push(push2)
      }else if(this.goodsitem.item_id){
        this.$router.push(push1)
      }
    
  }
  },
  
}
</script>
<style>
.goodlistitem{
  padding-bottom: 5%;
  width: 46%;
  
}
.goodlistitem img{
  width: 100%;
  border-radius: 15px;
  
}
.spname{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 2%;
}
.xing{
  font-size: 14px;
  color: hotpink;
  margin-left: 20%;
}

</style>