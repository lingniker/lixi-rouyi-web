// import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/components/layout/index'

// import SystemUserIndex from '@/pages/system/user/index'
// import SystemRoleIndex from '@/pages/system/role/index'
// import SystemMenuIndex from '@/pages/system/menu/index'
// import SystemDeptIndex from '@/pages/system/dept/index'
// import SystemPostIndex from '@/pages/system/post/index'
// import SystemDictIndex from '@/pages/system/dict/index'
// import SystemConfigIndex from '@/pages/system/config/index'
// import SystemNoticeIndex from '@/pages/system/notice/index'
// import SystemLogOperlogIndex from '@/pages/monitor/operlog/index'
// import SystemLogininfoIndex from '@/pages/monitor/logininfor/index'
// import MonitorOnlineIndex from '@/pages/monitor/online/index'
// import MonitorJobIndex from '@/pages/monitor/job/index'
// import MonitorServerIndex from '@/pages/monitor/server/index'
// import MonitorCacheIndex from '@/pages/monitor/cache/index'
// import ToolBuildIndex from '@/pages/tool/build/index'
// import ToolSwaggerIndex from '@/pages/tool/swagger/index'
// import ToolGenIndex from '@/pages/tool/gen/index'

// import ParentView from '@/components/ParentView';
// import InnerLink from '@/layout/components/InnerLink'

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      // state.routes = constantRoutes.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state, routes) => {
      // state.defaultRoutes = constantRoutes.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state, routes) => {
      // 顶部导航菜单默认添加统计报表栏指向首页
      const index = [{
        path: 'index',
        meta: { title: '统计报表', icon: 'dashboard'}
      }]
      state.topbarRouters = routes.concat(index);
    },
    SET_SIDEBAR_ROUTERS: (state, routes) => {
      state.sidebarRouters = routes
    },
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          const sdata = JSON.parse(JSON.stringify(res.data))
          const rdata = JSON.parse(JSON.stringify(res.data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata, false, true)
          rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', rewriteRoutes)
          commit('SET_SIDEBAR_ROUTERS', sidebarRoutes)
          commit('SET_DEFAULT_ROUTES', sidebarRoutes)
          commit('SET_TOPBAR_ROUTES', sidebarRoutes)
          resolve(rewriteRoutes)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter(route => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else if (route.component === 'ParentView') {
        // route.component = ParentView
      } else if (route.component === 'InnerLink') {
        // route.component = InnerLink
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    } else {
      delete route['children']
      delete route['redirect']
    }
    return true
  })
}

function filterChildren(childrenMap, lastRouter = false) {
  var children = []
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView') {
        el.children.forEach(c => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + '/' + el.path
    }
    children = children.concat(el)
  })
  return children
}

export const loadView = (view) => { // 路由懒加载
  // console.log('view---->', view)
  if ( view === 'system/user/index' ){
    // return SystemUserIndex
    // return (resolve) => require([`@/pages/system/user/index`], resolve)
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/user/index.vue`)
  } else if ( view === 'system/role/index') {
    // return SystemRoleIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/role/index.vue`)
  }  else if (view === 'system/menu/index') {
    // return SystemMenuIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/menu/index.vue`)
  } else if (view === 'system/dept/index') {
    // return SystemDeptIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/dept/index.vue`)

  } else if (view === 'system/post/index') {
    // return SystemPostIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/post/index.vue`)
  } else if (view === 'system/dict/index') {
    // return SystemDictIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/dict/index.vue`)
  } else if (view === 'system/config/index') {
    // return SystemConfigIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/config/index.vue`)
  } else if (view === 'system/notice/index') {
    // return SystemNoticeIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/system/notice/index.vue`)
  } else if (view === 'monitor/operlog/index') {
    // return SystemLogOperlogIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/operlog/index.vue`)
  } else if (view === 'monitor/logininfor/index') {
    // return SystemLogininfoIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/logininfor/index.vue`)
  } else if (view === 'monitor/online/index') {
    // return MonitorOnlineIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/online/index.vue`)
  } else if (view === 'monitor/job/index') {
    // return MonitorJobIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/job/index.vue`)
  } else if (view === 'monitor/server/index') {
    // return MonitorServerIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/server/index.vue`)
  } else if (view === 'monitor/cache/index') {
    // return MonitorCacheIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/monitor/cache/index.vue`)
  } else if (view === 'tool/build/index') {
    // return ToolBuildIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/tool/build/index.vue`)
  } else if (view === 'tool/swagger/index') {
    // return ToolSwaggerIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/tool/swagger/index.vue`)
  } else if (view === 'tool/gen/index') {
    // return ToolGenIndex
    return () => import(/* webpackChunkName: "doc" */ `@/pages/tool/gen/index.vue`)
  }
}

export default permission
