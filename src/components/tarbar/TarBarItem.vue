<template>
  <div class='item'>
      <slot name='tarbaricon' class="iconfont"></slot>
      <slot name='tarbardesc'></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.item {
  flex: 1;
  text-align: center;
}
.iconfont {
  font-size: 25px;
}
</style>