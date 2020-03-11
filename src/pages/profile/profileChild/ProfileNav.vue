<template>
  <div>
      <NavBar class="profileNav">
          <div slot="center">个人中心</div>
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
.profileNav{
    background-color: #ff8198;
    color: antiquewhite;
    font-size: 17px;
}
</style>
