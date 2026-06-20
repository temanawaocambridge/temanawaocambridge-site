import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/events', component: () => import('../views/Events.vue') },
  { path: '/news', component: () => import('../views/News.vue') },
  // { path: '/donate', component: () => import('../views/Donate.vue') },
  { path: '/supporters', component: () => import('../views/Partners.vue') },
  { path: '/contact', component: () => import('../views/Contact.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
