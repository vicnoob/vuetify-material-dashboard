import Vue from 'vue'
import Router from 'vue-router'
import store from './store';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/dashboard/Login'),
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      beforeEnter: (to, from, next) => {
        // Check if the user is authenticated
        if (store.getters.isAuthenticated) {
          next();  // Allow navigation to the Dashboard
        } else {
          next('/login');  // Redirect to login if not authenticated
        }
      },
      children: [
        {
          name: 'Land list',
          path: '',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Pages
        {
          name: 'Add new land',
          path: 'pages/add-new',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Edit land info',
          path: 'pages/edit/:id',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Land detail info',
          path: 'pages/detail/:id',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        // Tables
        // Maps
        // Upgrade
        {
          name: 'Statistic',
          path: 'statistic',
          component: () => import('@/views/dashboard/pages/Statistic'),
        },
      ],
    },
  ],
})
