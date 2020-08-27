import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // 开始Progress
  NProgress.start()
  if (getToken()) { // 已登录，有token
    if (to.path === '/login') { // 路由换成login，直接跳到首页
      debugger
      next({ path: '/' })
      NProgress.done()
    } else { // 路由不是login，自然跳转，并掉接口，拼接路由，显示菜单
      if (store.getters.roles.length === 0) { // 没有权限，调接口（这时路由没有拼接好，首次进入）;什么时候清空的
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          let menus=res.data.menus;
          let username=res.data.username;
          debugger
          store.dispatch('GenerateRoutes', { menus,username }).then(() => { // 生成可访问的路由表
            debugger
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            debugger
            next({ ...to, replace: true })
          })
        }).catch((err) => {
          debugger
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else { // 有权限，说明路由已经拼接好了，直接跳转;token被修改，或者过期，在调接口有拦截去处理，会返回过期信息
        next()
      }
    }
  } else {// 没有token
    // console.log(whiteList.indexOf(to.path))
    if (whiteList.indexOf(to.path) !== -1) { // 路由=login，自然跳转-跳到login
      next()
    } else { // 路由不是login，跳到login
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
