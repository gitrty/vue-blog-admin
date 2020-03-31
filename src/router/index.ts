import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: any = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      // 管理文章
      {
        path: '/',
        name: 'Administration',
        component: () => import('../views/home/Administration.vue')
      },
      // 发布文章
      {
        path: '/home/release',
        name: 'Release',
        component: () => import('../views/home/Release.vue')
      },
      // 编辑文章
      {
        path: '/home/edit',
        name: 'Edit',
        component: () => import('../views/home/Edit.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
