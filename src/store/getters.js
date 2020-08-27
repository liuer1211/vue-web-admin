const getters = {
  sidebar: state => state.app.sidebar, // 判断左侧菜单，收起、展开
  device: state => state.app.device,
  token: state => state.user.token, // 后台传来的token
  avatar: state => state.user.avatar,
  roles: state => state.user.roles, // 用户角色
  routers: state => state.permission.routers, // 路由：异步+基础
  addRouters: state => state.permission.addRouters, // 异步获取的路由
}

export default getters
