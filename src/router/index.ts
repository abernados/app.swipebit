import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import OTP from '../views/OTP.vue'
import ResetPassword from '../views/ResetPassword.vue'
import CheckForgotPassword from '../views/CheckForgotPassword.vue'
import Dashboard from '../views/Dashboard.vue'

import guest from './middleware/guest'
import auth from './middleware/auth'
import isRegistered from './middleware/isRegistered'
import isSameEmail from './middleware/isSameEmail'

Vue.use(VueRouter)
export const BASE_ROUTE = process.env.SWIPEBIT_API_HOSTNAME || '/'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "default" },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: [guest]
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      middleware: [guest]
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      middleware: [guest]
    },
  },
  {
    path: '/otp',
    name: 'OTP',
    component: OTP,
    meta: {
      middleware: [guest]
    },
  },
  {
    // path: '/reset-password',
    path: '/auth/forgot_password/check',
    name: 'CheckForgotPassword',
    component: CheckForgotPassword
  },
  {
    // path: '/reset-password',
    path: '/403',
    name: 'Unauthorized',
    component: CheckForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      middleware: [auth]
    },
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  base: BASE_ROUTE

})


router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware

  const context = {
      to,
      from,
      next,
      // store
  }
  return middleware[0]({
      ...context
  })
})
export default router
