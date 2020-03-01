import Vue from "vue";
import Router from 'vue-router'
const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')
Vue.use(Router)
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path:'/home',
    component:  Home
}, {
    path:'/cart',
    component:Cart
}, {
    path:'/category',
    component:Category
},{
    path:'/profile',
    component:Profile
}]
export default new Router({
    routes,
    mode: 'history'
})