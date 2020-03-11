<template>
  <div>
    <NavBar class="cateNav">
      <div slot="center">商品分类</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";

export default {
  data() {
    return {
        
    };
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.cateNav {
  background-color: #ff8198;
  color: white;
  position: fixed;
  top: 0;
}
</style>