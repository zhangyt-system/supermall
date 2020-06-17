<template>
  <div class="tab">
    <div v-for="(item,index) in tabArr" :key="index" class="tabItem" @click="tabItemClick(index)">
      <div :class="{itemactive:currIndex==index}">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currIndex: 0
    };
  },
  props: {
    tabArr: {
      type: Array,
      default: []
    }
  },
  computed: {},
  methods: {
    //动态的改变点击按钮的样式
    tabItemClick(index) {
      this.currIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  height: 35px;
  line-height: 35px;
}
.tabItem {
  flex: 1;
  padding: 0 20px;
}
.itemactive {
  color: #ff5777;
  border-bottom: solid 3px #ff5777;
}
</style>