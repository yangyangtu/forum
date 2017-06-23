import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
	base: '/home',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello
    }
  ]
})
