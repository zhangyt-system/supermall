<template>
  <div>
    <CartNav></CartNav>
    <CartListItem :infoData="infoData">
    </CartListItem>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import CartNav from "./cartChild/CartNav";
import CartBottom from "./cartChild/CartBottom";
import CartListItem from "./cartChild/CartListItem";
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
    CartItem,
    CartListItem
  }
};
</script>

<style scoped>
</style>