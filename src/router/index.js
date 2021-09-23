import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
