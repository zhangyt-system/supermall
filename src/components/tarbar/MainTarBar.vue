<template>
  <div>
       <router-view/>
    <TarBar>
      <TarBarItem path='/home'>
        <span slot="icon" class="iconfont">&#xe61c;</span>
        <div slot="txt">首页</div>
      </TarBarItem>
      <TarBarItem path='/category'>
        <span slot="icon" class="iconfont">&#xe65e;</span>
        <div slot="txt">分类</div>
      </TarBarItem>
      <TarBarItem path='/cart'>
        <span slot="icon" class="iconfont">&#xe7e6;</span>
        <div slot="txt">购物车</div>
      </TarBarItem>
      <TarBarItem path='/profile'>
        <span slot="icon" class="iconfont">&#xe66e;</span>
        <div slot="txt">个人</div>
      </TarBarItem>
    </TarBar>
  </div>
</template>

<script>
import TarBar from './TarBar'
import TarBarItem from './TarBarItem'
export default {
  components:{
    TarBar,
    TarBarItem
  }
}
</script>

<style>

</style>