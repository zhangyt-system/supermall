<template>
  <div>
    <div v-for="(item,index) in infoData" :key="index">
        <CartItem :infoDataItem="infoData">
        </CartItem>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  components: {
    CartItem
  },
  props: {
    infoData: Array
  }
};
</script>

<style scoped>
</style>