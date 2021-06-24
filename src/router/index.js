import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import produto from '../views/produto.vue'
import login from'../views/login.vue'
import admin from '../views/admin.vue'
import error_page from '../views/error_page.vue'
import registo from '../views/registo.vue'
import registar from '../views/registar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/produto',
    props: true,
    name: 'Produto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: produto
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: admin
  },
  {
    path: '/registo',
    name: 'Registo',
    component: registo
  },
  {
    path: '/registar',
    name: 'Registar',
    component: registar
  },
  {
    path: '*',
    name: 'Error_page',
    component: error_page
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
