<template>
  <div>
    <CartNav></CartNav>
    <CartItem :infoData="infoData"></CartItem>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import CartNav from "./cartChild/CartNav";
import CartBottom from "./cartChild/CartBottom";
import CartItem from "./cartChild/CartItem";
export default {
  data() {
    return {
      infoData: []
    };
  },
  mounted() {
    this.infoData=this.$store.getters.cartList
    console.log(this.infoData)
  },
  components: {
    CartNav,
    CartBottom,
    CartItem
  }
};
</script>

<style scoped>
</style>