<template>
  <div class="wrappper">
      <TarBarItem>
            <div slot="tarbaricon" class="item">&#xe61c;</div>
            <div slot="tarbardesc" class="iconfont">个人</div>
      </TarBarItem>
  </div>
</template>

<script>
import TarBarItem from "./TarBarItem";
export default {
    components:{
        TarBarItem
    }
}
</script>

<style>
.wrappper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
}
</style>