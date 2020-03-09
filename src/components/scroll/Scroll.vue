<template>
  <div class="wrapper" ref="wrapper">
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      //   console.log(position)
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
    //   console.log("下拉加载更多");
      this.$emit("pullingUp");
    });
  }
};
</script>

<style scoped>
</style>