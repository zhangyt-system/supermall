<template>
  <div>
    <div class="totalCart" >
      <!-- {{item.iid}}  -->
      <CartBtn :iconClick='iconClick'></CartBtn>
      <img :src="this.infoDataItem.imgUrl" />
      <div class="cartRight">
        <div class="title">{{this.infoDataItem.title}}</div>
        <div class="desc">商品描述:{{this.infoDataItem.desc}}</div>
        <span class="price">¥{{infoDataItem.newPrice}}</span>
        <span class="count">x{{infoDataItem.count}}</span>
        <!-- {{infoDataItem}} -->
      </div>
    </div>
  </div>
</template>

<script>
import CartBtn from './CartBtn'
export default {
  mounted(){
    console.log(this.infoDataItem)
  },
  components:{
    CartBtn
  },
  props:{
    infoDataItem:Object
  },
  methods:{
    iconClick(){

    }
  }
};
</script>

<style scoped>

img {
  width: 80px;
  height: 100px;
  border-radius: 9px;
}
.cartRight {
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 6px;
  overflow: hidden;
  font-size: 14px;
}
.totalCart {
  margin: 5px;
  display: flex;
}
.title {
  overflow: hidden;
  line-height: 19px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 19px;
  margin: 9px;
  font-size: 17px;
  color: #222;
}
.desc {
  height: 25px;
  margin: 9px;
  font-size: 14px;
  color: #666;
}
.price {
  height: 25px;
  margin: 9px;
  color: #ff5777;
  width: 99px;
  text-align: center;
}
.count {
  height: 25px;
}
</style>