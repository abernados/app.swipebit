import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import OTP from '../views/OTP.vue'
import ResetPassword from '../views/ResetPassword.vue'
import CheckForgotPassword from '../views/CheckForgotPassword.vue'
import ProfilePicture from '../views/Settings/ProfilePicture/View.vue'
import Password from '../views/Settings/Password/Edit.vue'
import EditAccount from '../views/Settings/MyAccount/Edit.vue'
import ViewAccount from '../views/Settings/MyAccount/View.vue'
// import EditOtpMode from '../views/Settings/OtpMode/Edit.vue'
// import ViewOtpMode from '../views/Settings/OtpMode/View.vue'
import ProfileLayout from '../views/Settings/Layout.vue'
import Error404 from '../views/404.vue'

import guest from './middleware/guest'
import auth from './middleware/auth'

Vue.use(VueRouter)
export const BASE_ROUTE = process.env.SWIPEBIT_API_HOSTNAME || '/'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: "default",
      middleware: [auth]
    },
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: "no-navbar",
      middleware: [guest]
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      layout: "no-navbar",
      middleware: [guest]
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: "no-navbar",
      middleware: [guest]
    },
  },
  {
    path: '/otp',
    name: 'OTP',
    component: OTP,
    meta: {
      layout: "no-navbar",
      middleware: [guest]
    },
  },
  {
    // path: '/reset-password',
    path: '/auth/forgot_password/check',
    name: 'CheckForgotPassword',
    component: CheckForgotPassword,
    meta: {
      layout: "no-navbar",
    },
  },
  {
    // path: '/reset-password',
    path: '/403',
    name: 'Unauthorized',
    component: CheckForgotPassword,
    meta: {
      layout: "no-navbar",
    },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      layout: "no-navbar",
    },
  },
  {
    path: '/profile',
    name: 'ProfileLayout',
    component: ProfileLayout,
    meta: {
      middleware: [auth],
      layout: "default",
    },
    children: [
          {
            path: 'account',
            name: 'MyProfile.View',
            component: ViewAccount,
          },
          {
            path: 'account/edit',
            name: 'MyProfile.Edit',
            component: EditAccount,
          },       
          {
            path: 'picture',
            name: 'ProfilePicture',
            component: ViewAccount
          },       
          {
            path: 'password',
            name: 'Password',
            component: Password
          }
    ]
  },
  //     // {
  //     //   path: 'password',
  //     //   component: Password
  //     // },
  //     // {
  //     //   path: 'otp-mode',
  //     //   component: ViewOtpMode
  //     // },
  //     // {
  //     //   path: 'otp-mode/edit',
  //     //   component: EditOtpMode
  //     // },
  //     // {
  //     //   path: 'avatar',
  //     //   component: Avatar
  //     // }
  //   ]
  // },
  {
    path: '/404',
    name: 'Error404',
    component: Error404,
    meta: {
      layout: "no-navbar",
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
  mode: 'history',
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
