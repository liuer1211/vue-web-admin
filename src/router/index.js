import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout' // 组件页面

// 初始路由页面配置
export const constantRouterMap = [
  {
    path: '/login', // 路径
    component: () => import('@/views/login'), // 跳转组件页面
    hidden:true // 左侧隐藏导航栏，
  },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    // 空路径，重定向home路由，它指向子组件home/index.vue(进入此页面要进行登陆判断，调接口，配置动态路由)
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页',
        icon: 'home'
      }
    }]
  }
]

// 异步
export const asyncRouterMap = [
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限', icon: 'ums'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      }
    ]
  }
]
export default new Router({
  routes:constantRouterMap // 路由集合
})
