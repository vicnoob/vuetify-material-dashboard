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
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
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
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Land list',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        // Upgrade
        {
          name: 'Statistic',
          path: 'statistic',
          component: () => import('@/views/dashboard/Statistic'),
        },
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
      ],
    },
  ],
})
