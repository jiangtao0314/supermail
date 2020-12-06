<template>
  <div>
    
    <table class="size-info" v-for="iteme in paramsinfo.tables"
    v-if="Object.keys(paramsinfo).length !== 0">
      <tr v-for="(itemone,index) in iteme">
        <td v-for="itemonee in itemone">{{itemonee}}</td>
        <!-- <span>{{itemone[index]}}</span> -->
      </tr>
    </table>
    <div class="varaing">{{paramsinfo.disclaimer}}</div>
    <ul class="product-info" v-if="Object.keys(paramsinfo).length !== 0">
      <li v-for="item in paramsinfo.set">
        <span>{{item.key}}</span>
        <span class="val">{{item.value}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    paramsinfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>
<style scoped>
.size-info{
  width: 100%;
}
.size-info tr{
  font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    width: 100%;
}
.size-info td{
  display: inline-block;
  width: 20%;
  height: 40px;
}
  .product-info{
    width: 100%;
  }
  .product-info li{  
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .product-info li span{
    height: 40px;
    /* text-align: center; */
    line-height: 40px;
    display: inline-block;
    width: 46%;
    padding-left: 2%;
  }
  .val{
    color:pink;
  }
  .varaing{
    margin: 15px 0;
    color: pink;
  }
</style>