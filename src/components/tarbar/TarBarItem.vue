<template>
  <div class="tarbarItem" @click="handleClick" :class="{Active:isActive}">
    <slot class="iconfont" name="icon"></slot>
    <slot name="txt"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props:{
      path:String
  },
  computed:{
    isActive(){
      return this.path==this.$route.path
    }
  },
  methods: {
    handleClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
.tarbarItem {
  flex: 1;
  text-align: center;
}
.iconfont {
  font-size: 23px;
}
.Active{
  color:#ff5777;
}
</style>