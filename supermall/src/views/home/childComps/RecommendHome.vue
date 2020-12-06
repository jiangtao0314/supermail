<template>
  <div class="comment">
    <div v-for="(item,key) in recommends" :key = key class="comment-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>
<script>
export default {
  components:{

  },
  props:{
    recommends:{
      type:Array,
    }
  },
}
</script>
<style>
    .comment{
      margin-top: 20px;
      padding-bottom: 24px;
      display: flex;
      text-align: center;
      width: 100%;
      
      border-bottom: 8px solid #eee;
    }
    .comment-item{
    
    width: 25%;
    flex: 1;
    }
    .comment-item img{
      width: 80%;
    }
</style>