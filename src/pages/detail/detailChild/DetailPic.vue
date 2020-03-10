<template>
  <div>
      <div class="desc">{{detailPic.detailInfo.desc}}</div>
      <div class="key">{{detailPic.detailInfo.detailImage[0].key}}</div>
      <div v-for="(item,index) in detailPic.detailInfo.detailImage[0].list" :key="index">
          <img :src="item"/>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    detailPic: Object
  }
};
</script>

<style scoped>
.desc{
    color:#444;
    margin: 19px;
    font-size: 13px;
}
img{
    width:100%;
}
.key{
    color:#333;
    margin: 19px;
    font-size: 15px;
}
</style>