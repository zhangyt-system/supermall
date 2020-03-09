import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')
const Detail =()=>import('../pages/detail/Detail')
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/profile',
    component: Profile
},{
    path: '/detail/:iid',
    component: Detail
}]
export default new Router({
    routes,
    mode: 'history'
})