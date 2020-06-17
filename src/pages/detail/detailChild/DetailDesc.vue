<template>
  <div class="wrapper" v-if="Object.keys(itemDesc).length !== 0">
    <!-- {{itemDesc}} -->
    <div class="title">{{itemDesc.itemInfo.title}}</div>
    <div class="totalPrice">
      <span class="price">{{itemDesc.itemInfo.price}}</span>
      <span class="oldPrice">{{itemDesc.itemInfo.oldPrice}}</span>
      <span
        class="discountDesc"
        :style="{backgroundColor:itemDesc.itemInfo.discountBgColor}"
      >{{itemDesc.itemInfo.discountDesc}}</span>
    </div>
    <div class="sellDesc">
      <div v-for="(item,index) in itemDesc.columns" :key="index" class="sellDescItem">{{item}}</div>
    </div>
    <div class="otherDesc">
      <div v-for="(item,inde) in itemDesc.shopInfo.services" :key="inde" class="otherDescItem">
        <img :src="item.icon" />
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemDesc: Object
  },
  mounted() {
    console.log(this.itemDesc);
  }
};
</script>

<style scoped>
.title {
  font-size: 17px;
  margin: 4px;
}
.totalPrice {
  margin: 8px;
}
.price {
  font-size: 25px;
  color: #ff5777;
}
.oldPrice {
  font-size: 13px;
  text-decoration: line-through;
  color: gray;
}
.discountDesc {
  height: 19px;
  font-size: 13px;
  border-radius: 12px;
  color: aliceblue;
}
.sellDesc {
  display: flex;
  justify-content: space-around;
  margin: 18px;
  font-size: 13px;
  color: gray;
}
.sellDescItem {
  flex: 1;
}
.otherDesc {
  display: flex;
  /* justify-content: space-around; */
  margin: 18px 0;
  font-size: 10px;
  color: #333;
}
.otherDescItem {
  flex: 1;
}
img {
  height: 12px;
}
</style>