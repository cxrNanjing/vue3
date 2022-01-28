import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'

import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] //根据userMenus来决定
  },
  {
    path: '/:pathMath(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

// 注册路由
// 1、写死 缺点：手动输入URL可以直接看到 存在安全隐患
// 2、先把路由写好（角色-路由）根据登陆然后根据信息去动态的加载 缺点 新增角色时要重新修改代码在部署
// 3、根据菜单-路由 菜单->url->路由->path->component 需要后端返回路径

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
