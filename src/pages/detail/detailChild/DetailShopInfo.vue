<template>
  <div>
    <div class="baseDesc">
      <img class="img" :src="shopInfo.shopLogo" />
      <div class="name">{{shopInfo.name}}</div>
    </div>
    <div class="shopInfo">
      <div class="shopInfoItemSell">
        <div>{{totalSell}}</div>
        <div>总销量</div>
      </div>
      <div class="shopInfoItemShop">
        <div>{{shopInfo.cGoods}}</div>
        <div>全部宝贝</div>
      </div>

      <div class="shopInfoItem">
        <div v-for="(item,index) in shopInfo.score" :key="index">
          <span class="itemName">{{item.name}}</span>
          <span class="itemScore" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="morehigh" v-show="item.isBetter">高</span>
          <span class="morelow" v-show="!item.isBetter">低</span>
        </div>
      </div>
    </div>
    <div class="hang">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: Object
  },
  computed:{
      totalSell(){
          return this.shopInfo.cSells.toString()
      }
  }
};
</script>

<style scoped>
.baseDesc {
  height: 45px;
  display: flex;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #555;
}
.img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
  margin-left: 16px;
  margin-right: 20px;
}
.name {
  line-height: 45px;
  flex: 1;
}
.shopInfo {
  display: flex;
  /* text-align: center; */
}
.shopInfoItem {
  flex: 1;
  text-align: left;
  margin-left:23px;
   
}
.shopInfoItemSell{
    width:85px;
    text-align: center;
    line-height: 169%;
    color:#333;
}
.shopInfoItemShop{
    text-align: center;
    line-height: 169%;
    width:85px;
    border-right:1px solid lightgray; 
    color:#333;
}
.itemScore{
    margin-left:3px;
    color:green;
    font-size: 13px;
}
.active{
    color:red;
}
.itemName{
    font-size: 13px;
    color: #333;
}
.morehigh{
    font-size: 13px;
    background-color: red;
    color:#ccc;
}
.morelow{
    font-size: 13px;
    background-color: green;
    color:#ccc;
}
.hang{
    text-align: center;
    margin:26px;
    color: #444;
    font-size: 14px;
}
</style>