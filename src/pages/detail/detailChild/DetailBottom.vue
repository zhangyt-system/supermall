<template>
  <div>
    <!-- <h2>bottombar</h2> -->
    <div class="bottomBar">
      <div class="text">
        <span class="iconfont">&#xe601;</span>客服
        <span class="iconfont">&#xe624;</span>店铺
        <span class="iconfont">&#xe6a7;</span>收藏
      </div>
      <div>
        <div class="toCart" @click="toCartClick">加入购物车</div>
        <div class="toBuy">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCartClick() {
      console.log("点击了toCartClick");
      this.$emit("toCartClick");
    }
  }
};
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
  text-align: center;
}
.iconfont {
  padding: 5px 0;
}
.text {
  position: absolute;
  left: 15px;
}
.toCart {
  background-color: #ffe817;
  position: absolute;
  right: 88px;
  color: #333;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 2px;
  text-align: center;
  bottom: 0;
  margin-right: 2px;
}
.toBuy {
  position: absolute;
  right: 0px;
  background: #f69;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 2px;
  text-align: center;
  bottom: 0;
  color: #333;
}
</style>