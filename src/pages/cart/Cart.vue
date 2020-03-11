<template>
  <div>
      <CartNav></CartNav>
      <CartItem></CartItem>
      <CartBottom></CartBottom>
  </div>
</template>

<script>
import CartNav from './cartChild/CartNav'
import CartBottom from './cartChild/CartBottom'
import CartItem from './cartChild/CartItem'
export default {
  components:{
    CartNav,
    CartBottom,
    CartItem
  }
}
</script>

<style scoped>

</style>