import {constantRouterMap} from '@/router/index'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.connect(routers)
    }
  },
  actions: {

  }
}
export default permission;
