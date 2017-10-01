import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/Overview'
import Assignment from '@/components/Assignment'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/assignment',
      name: 'Assignment',
      component: Assignment
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
