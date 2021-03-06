import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
import Cate from '../components/goods/Cate'
import Params from '../components/goods/Params'
import GoodsList from '../components/goods/List'
import Add from '../components/goods/Add'
import Order from '../components/order/order'
import Report from '../components/report/Report'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login', component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      {
        path: '/Welcome', component: Welcome
      },
      {
        path: '/Users', component: Users
      },
      {
        path: '/rights', component: Rights
      },
      {
        path: '/roles', component: Roles
      },
      {
        path: '/categories', component: Cate
      },
      {
        path: '/params', component: Params
      },
      {
        path: '/goods', component: GoodsList
      },
      {
        path: '/goods/add', component: Add
      },
      {
        path: '/orders', component: Order
      },
      {
        path: '/reports', component: Report
      }
    ]
  },
  {
    path: '/', redirect: '/Login'
  }
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
