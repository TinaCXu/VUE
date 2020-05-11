import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
