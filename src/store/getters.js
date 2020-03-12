const getters = {
    cartList(state){
        return state.cartList
    },
    cartCount(getters){
        return getters.cartList.length
    }
}
export default getters