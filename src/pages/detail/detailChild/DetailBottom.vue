<template>
  <div>
    <!-- <h2>bottombar</h2> -->
    <div class="bottomBar">
      <div>客服</div>
      <div>店铺</div>
      <div>收藏</div>
      <div>
        <span class="toCart">加入购物车</span>
        <span class="toBuy">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottomBar {
  position: fixed;
  height: 55px;
  bottom: 0;
  z-index: 11;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  line-height: 55px;
  /* margin: 0; */
}
.toCart {
  background-color: yellow;
  padding:18px 0;
  /* border-radius: 25px; */
}
.toBuy {
  background: #ff8198;
  padding:18px 12px;

}
</style>