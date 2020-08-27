import request from '@/utils/request'

export function login(username, password) {
  // 登陆信息
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

// 用户的路由信息，权限身份
export function getInfo() {
  debugger
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

// token过期登出

// 点击退出 登出
export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
