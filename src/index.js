import './style/_common.scss'
import './javascript/common'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render:h => h(App)
}).$mount('#app')
