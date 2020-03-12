<template>
  <div>
    <div class="totalBott">
      <div class="iconfont">&#xe60c;</div>
      <div class="all">全选</div>
      <div class="count">合计:¥ {{counter}}</div>
      <div class="toBuy">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style scoped>

.totalBott {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 55px;
  width: 100%;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 10px 10px 20px 10px #333,
    -10px 10px 10px 10px rgba(255, 255, 255, 0.5);
}
.iconfont {
  line-height: 40px;
  font-size: 18px;
  color: #ff5777;
  width: 10%;
}
.count {
  color: #777;
  width: 25%;
}
.all {
  width: 12%;
  color: #777;
}
.toBuy {
  width: 40%;
  text-align: center;
  color: white;
  background-color: lightpink;
  border-radius: 14px;
}
</style>