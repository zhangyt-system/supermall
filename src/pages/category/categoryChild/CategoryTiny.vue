<template>
  <div class="totalSubCate">
    <div v-for="(item,index) in categoryTiny" :key="index" class="itemSubCate">
      <a :href="item.link"></a>
      <img :src="item.image" />
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryTiny: Array
  }
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
.totalSubCate {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.itemSubCate {
  flex: 1;
  margin:6px;
}
.title{
    font-size: 12px;
    color:#777;
}
</style>