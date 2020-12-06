<template>
<div class="neirong">
  <div v-if="Object.keys(goods).length !== 0" >
    <div class="detailtitle">
     &nbsp &nbsp {{goods.title}}
    </div>

  <div class="price">
      <span class="newprice">
      &nbsp{{goods.newPrice}}&nbsp
      </span>
      <del class="oldprice">
        {{goods.oldPrice}}
      </del>
      <span class="discount" v-if="goods.discount">
        &nbsp{{goods.discount}}
      </span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
</div>
    
  </div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
    props: {
		  goods: {
		    type: Object,
        default() {
		      return {}
        }
      }
    }
	}
</script>

<style scoped>
 .detailtitle{
   font-size: 18px;
   font-weight: 500;
 }
 .price{
   margin-left: 0!important;
   margin-top: 10px;
 }
 .newprice{
   color: pink;
   font-size: 25px;
 }
 .oldprcie{
  margin-left: 5px;
  font-size: 10px;
 }
 .discount{
   margin-left: 4px;
   transform: translateY(-4px);
   color: white;
   background-color: pink;
   border-radius: 20px;
   font-size: 6px;
   display: inline-block;
   height: 20px;
   width: 40px;
   text-align: center;
   line-height: 20px;
 }
  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: pink;
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: -22px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
