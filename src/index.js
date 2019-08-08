import './style/_common.scss'
import './javascript/common'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.use(VueRouter)

new Vue({
  render:h => h(App)
}).$mount('#app')
