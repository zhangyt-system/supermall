<template>
  <div class="tab">
    <div v-for="(item,index) in tabArr" :key="index" class="tabItem" @click="tabItemClick(index)" 
    :class="{active:currIndex==index}"
    >
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive:true,
      currIndex: 0
    };
  },
  props: {
    tabArr: {
      type: Array,
      default: []
    }
  },
  computed: {
  },
  methods: {
    tabItemClick(index) {
      this.currIndex = index;
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
}
.active {
  color: #ff5777;
  border-bottom:solid 3px #ff5777;
}
</style>