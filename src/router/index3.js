import Vue from 'vue'
import VueRouter from 'vue-router'
//模块
//模块基础页面
const Home = () => import('@/views/home/Home')
//登录页面
const Login = () => import('@/views/login/Login')
//商品管理页
const Shop = () => import('@/views/shop/Shop')
//商品分类页
const Sort = () => import('@/views/shop/Sort')
//商品管理页
const Wa = () => import('@/views/shop/Wa')
//订单管理
const Order = () => import('@/views/order/Order')
//拼团管理
const Assemble = () => import('@/views/assemble/Assemble')
//商品管理
const Mall = () => import('@/views/mall/Mall')
//会员管理
const Member = () => import('@/views/member/Member')
//首页
const Dashboard = () => import('@/views/dashboard/Dashboard')

//上传文件页
const Upload = () => import('@/views/upload/Upload')

//上传文件页
const NotFound = () => import('@/views/notFound/NotFound')

Vue.use(VueRouter)
const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: Home,
    meta:[{name:'首页'}],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      }, {
        path: 'shop/shop',
        component: Shop,
        meta:[{name:'商品管理/管理商品'}],
      }, {
        path: 'shop/sort',
        component: Sort,
        meta:[{name:'商品管理/商品分类'}],
      }, {
        path: 'shop/upload',
        component: Upload,
        meta:[{name:'商品管理/商品上传'}],
      }, {
        path: 'shop/wa',
        component: Wa,
        meta:[{name:'商品管理/商品wa'}],
      }, {
        path: 'order/order',
        component: Order,
        meta:[{name:'订单管理/订单'}],
      }, {
        path: 'assemble/assemble',
        component: Assemble,
        meta:[{name:'拼团管理/拼团'}],
      }, {
        path: 'mall/mall',
        component: Mall,
        meta:[{name:'商城管理/商城'}],
      }, {
        path: 'member/member',
        component: Member,
        meta:[{name:'会员管理/会员'}],
      }
    ]
  }, {
    path: '/login',
    component: Login,
    meta:[{name:'登录'}],
  },
  {path:'*',component:NotFound},//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
]
// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
