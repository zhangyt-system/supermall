<template>
  <div>
    <div v-for="(item,index) in this.categoryTab" :key="index" 
    @click="cateTabClick(index)"
    :class="{active:currIndex==index}"
    class="categoryTabItem"
    >
      <div>{{item.title}}</div>
      <!-- <div>{{item.maitKey}}</div> -->
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/Scroll'
export default {
  data() {
    return {
      currIndex: 0,
    };
  },
  props:{
      categoryTab:Array
  },
  components:{
      Scroll,
  },
  methods: {
    cateTabClick(index) {
        this.currIndex=index
        this.$emit('getMaitkey',index)
    }
  }
};
</script>

<style scoped>
.active{
    color:#ff5777;
    border-left: 3px solid #ff5777;
}
.categoryTabItem{
    padding: 17px 0 17px 17px;
    margin: 0;
    color:#666;
    font-size: 14px;
    width: 100px;
}
</style>