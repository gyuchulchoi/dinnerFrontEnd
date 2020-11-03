import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import {Home, Bonif, MenuDetail} from './index'

Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.mixin({
  created: function() {
    if(this.$options.aaa) {
      console.log(this.$options.aaa)
    }
  }
})

const routes = [
  { path: '/', component: Home },
  { path: '/bon', component: Bonif },
  { path: '/menu/:id', name:'menu', component: MenuDetail }
]



const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
