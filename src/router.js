
// Modules

import { createRouter, createWebHashHistory } from 'vue-router'
import MyMain from '@/views/Main'
import MyAbout from '@/views/About'

// Logic

const routes = [
  { path: '/', name: 'Main', component: MyMain },
  { path: '/about', name: 'About', component: MyAbout }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
