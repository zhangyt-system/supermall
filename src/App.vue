
<template>
<div  id="app">
  <div class="wrappper">
    <div class="item">
      <div class="iconfont">&#xe61c;</div>
      <router-link to="/home">首页</router-link>
    </div>
    <div class="item">
      <div class="iconfont">&#xe61c;</div>
      <router-link to="/category">分类</router-link>
    </div>
    <div class="item">
      <div class="iconfont">&#xe61c;</div>
      <router-link to="/cart">购物车</router-link>
    </div>
    <div class="item">
      <div class="iconfont">&#xe61c;</div>
      <router-link to="/profile">个人</router-link>
    </div>
    
  </div>
  <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.wrappper{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  
}
.item{
  flex: 1;
  text-align: center;
}
.iconfont{
  font-size: 25px;
}
</style>
