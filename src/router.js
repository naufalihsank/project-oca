import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login Page',
      path: '/',
      component: () => import('@/views/dashboard/Login.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Home',
          path: '/dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'SMS',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
      ],
    },
  ],
})
