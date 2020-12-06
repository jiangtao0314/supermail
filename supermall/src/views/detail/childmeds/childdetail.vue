<template>
  <div>
    <navbar>
      <template v-slot:left>
        <div class="back" @click="backclick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
       <template v-slot:center>
         <div class="title" >
           <span v-for="(item,index) in title" class="titleitem"
            :class ="{active: (index == currentindex)}"
            @click="itemclick(index)"
            >{{item}}</span> 
         </div>
       </template>    
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
export default {
  components:{
    navbar
  },
  props:{
    kilakila:{
      type:Number
    }
  },
  data() {
    return {
      title:['商品','参数','评论','推荐'],
      currentindex : 0,
    }
  },
  methods: {
    itemclick(index){
      // console.log(1);
      this.currentindex = index
      this.$emit('itemClick',index)
    },
    backclick(){
      this.$router.back()
    }
  },
  watch: {
    "kilakila":function(){
      this.currentindex = this.kilakila
      // console.log(this.kilakila);
    }
  },
}
</script>

<style scoped>
.back img{
  position: relative;
  top: -10px;
  left:0px
}
  .title{
    display: flex;
  }
  .titleitem{
    flex: 1;
    line-height: 44px;
  }
  .active{
    color: pink;
  }
</style>