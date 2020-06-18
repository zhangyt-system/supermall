<template>
  <div v-if="Object.keys(goodsItem).length !== 0">
    <div @click="goodsItemClick" v-if="Object.keys(goodsItem).length !== 0">
      <img :src="pic" @load="goodsItemLoadImage" />
      <p class="title">{{goodsItem.title}}</p>
      <span>¥{{goodsItem.price}}</span>
      <span>❤{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: Object
  },
  methods: {
    goodsItemLoadImage() {
      this.$bus.$emit("goodsItemLoadImage");
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  },
  computed: {
    pic() {
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    }
  }
};
</script>

<style scoped>
img {
  width: 160px;
  margin-left: 6px;
  border-radius: 6px;
}
.title {
  width: 160px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 6px;
  overflow: hidden;
  font-size: 14px;
}
span {
  text-align: center;
  margin-left: 23px;
  font-size: 13px;
}
</style>