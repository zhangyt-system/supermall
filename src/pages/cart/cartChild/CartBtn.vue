<template>
  <div @click="iconClick">
    <span class="iconfont" v-show="iconShow">&#xe60c;</span>
    <span class="iconfont" v-show="!iconShow">&#xe60d;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconShow: true
    };
  },
  methods: {
    iconClick() {
      if (this.iconShow === true) {
        this.iconShow = false;
      } else if (this.iconShow === false) {
        this.iconShow = true;
      }
      this.$emit("iconClick")
    }
  }
};
</script>

<style scoped>
.iconfont {
  line-height: 100px;
  margin-right: 2px;
  font-size: 18px;
  color: #ff5777;
}
</style>