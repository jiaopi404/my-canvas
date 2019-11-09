import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/demo-001'
    },
    {
      path: '/demo-001',
      name: 'demo-001',
      component: () => import('@/components/demo-001.vue')
    },
    {
      path: '/demo-002',
      name: 'demo-002',
      component: () => import('@/components/demo-002.vue')
    }
  ]
})
