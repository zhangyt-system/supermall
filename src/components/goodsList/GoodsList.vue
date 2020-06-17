<template>
  <div class="wrapper">
    <div v-for="(item,index) in goodsList" :key="index" class="item">
      <goodsListItem :goodsItem="item"></goodsListItem>
    </div>
  </div>
</template>

<script>
import goodsListItem from "./GoodsListItem";
export default {
  props: {
    goodsList: Array
  },
  components: {
    goodsListItem
  },
  mounted() {
    console.log(this.goodsList);
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 10px;
  display: flex;
  /* flex-direction: row;*/
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
.item {
  /* flex:1; */
  /* width:38% */
  border-radius: 12px;
}
</style>