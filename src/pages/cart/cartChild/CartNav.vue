<template>
  <div>
      <NavBar class="navBar">
          <div slot="center">购物车</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
export default {
    components:{
        NavBar
    }
}
</script>

<style scoped>
.navBar{
    background-color: #ff8198;
    color:white
}
</style>