<template>
  <div>
    <NavBar class="navbar">
      <span class="iconfont" slot="left" @click="backClick">&#xe607;</span>
      <span
        slot="center"
        v-for="(item,index) in navArr"
        :key="index"
        class="navItem"
        @click="activeClick(index)"
        :class="{active:index==currIndex}"
      >{{item}}</span>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";

export default {
  data() {
    return {
      navArr: ["商品", "参数", "评论", "推荐"],
      currIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    activeClick(index) {
      this.currIndex = index;
      this.$emit("navClick", index);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  color: gray;
  position: fixed;
  z-index: 10;
}
.navItem {
  margin: 8px;
}
.active {
  color: #ff5777;
}
</style>