<template>
  <div class="tarbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tarbar{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    bottom:0;
    height: 49px;
    position: fixed;
    width: 100%;
    background-color: lightgray;
    padding:3px;
}
</style>