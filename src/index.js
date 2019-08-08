import './style/_common.scss'
import './javascript/common'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import User from './components/User.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/user', component:  User}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render:h => h(App)
}).$mount('#app')
