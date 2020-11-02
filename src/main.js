import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueRouter from 'vue-router'

import {Home,Bonif} from './index'

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/bon', component: Bonif }
]



const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
