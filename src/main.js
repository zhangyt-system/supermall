// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import '../static/icon/iconfont.css'
import './assets/basestyled.css'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
var EventBus = new Vue();
Object.defineProperties(Vue.prototype,{
  $bus:{
    get:function(){
      return EventBus
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
