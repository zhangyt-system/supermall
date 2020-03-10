<template>
  <div>
      <div class="hotrecommend">热门推荐</div>
     <GoodsList :goodsList="detailRecommend">
     </GoodsList>
  </div>
</template>

<script>
import GoodsList from "@/components/goodsList/GoodsList";
import GoodsListItem from "@/components/goodsList/GoodsListItem";
export default {
    props:{
        detailRecommend: Array
    },
  components: {
      GoodsList,
      GoodsListItem
  }
};
</script>

<style scoped>
.hotrecommend{
  margin:12px;
  color:#333;
}
</style>