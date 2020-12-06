<template>
  <div class="all"  v-if="Object.keys(commentinfo).length !== 0">
    <div class="more">
      <div class="left">用户评价</div>
      <div class="right">更多</div>
    </div>
    <div class="users">
      <img :src="commentinfo.list[0].user.avatar" alt="">
      <div>{{commentinfo.list[0].user.uname}}</div>
    </div>

    <div class="common">
      <div>{{commentinfo.list[0].content}}</div>
      <!-- 服务器返回的是时间戳（秒）需要用到过滤器 -->
      <div class="time">{{gettime}} &nbsp {{commentinfo.list[0].style}}</div>
    </div>
    <div class="showimg">
      <img :src="item" alt="" v-for="item in commentinfo.list[0].images">
    </div>


    <!-- <div>{{commentinfo.list[0]}}</div> -->
  </div>
</template>
<script>
export default {
  props:{
    commentinfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed: {
    gettime(){
      let time = this.commentinfo.list[0].created 
      //乘1000 把秒变为毫秒
      let date = new Date(time*1000);
      let years = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDay()
      return `${years}/${month}/${day}`
    }
  },
}
</script>
<style scoped>
  .all{
    width: 94%;
    margin: 3% auto;
  }
  .more{
    margin-top: 40px;
    border-top:2px solid #eeeeee ;
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid #eeeeee;
  }
  .more div{
    width: 44%;
    height: 100%;
  }
  .left{
    float: left;
    padding-left: 3%;
    text-align: left;
  }
  .right{
    float: right;
    padding-right: 6%;
    text-align: right;
  }
  .users{
    margin-top: 15px;
    width: 100%;
    height: 70px;
  }
  .users img{
    margin-left: 10px;
    width: 20%;
    border-radius: 50%;
  }
  .users div{
    display: inline-block;
    line-height: 70px;
    margin-left: 10px;
  }
  .common{
    margin-top: 20px;
    color: black;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 40px;
  }
  .time{
    padding:13px 0;
  font-size: 13px;
  color: gray;
  }
</style>