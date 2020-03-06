<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar{
    display: flex;
    width: 100%;
    /* position: relative; */
    height: 44px;
    background-color: #ff8198;
    text-align: center;
    line-height: 44px;
    color: #ccc;
}
.left{
    width: 60px;
}
.center{
    flex:1;
}
.right{
    width:60px;
}

</style>