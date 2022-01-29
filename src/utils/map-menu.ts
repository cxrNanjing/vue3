import type { RouteRecordRaw } from 'vue-router'
import type { MenuBreadCrumb } from '@/views/main/childcpn/header/index'

let firstMenu: any
export function mapMenuToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 此处要是一个个导太蛮烦了 需要require函数
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // 2、根据菜单获取需要添加的routes
  //  递归函数
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => {
          return item.path === menu.url
        })
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenu)
  return routes
}

export function pathToMenu(userMenu: any[], url: string): any {
  for (const item of userMenu) {
    if (item.type === 1) {
      const findItem = pathToMenu(item.children ?? [], url)
      if (findItem) return findItem
    } else if (item.type === 2 && item.url === url) {
      return item
    }
  }
}

export function pathToBreakMenu(userMenu: any[], url: string): any {
  const itemBreadCrumb: MenuBreadCrumb[] = []
  for (const item of userMenu) {
    if (item.type === 1) {
      const findItem = pathToMenu(item.children ?? [], url)
      if (findItem) {
        itemBreadCrumb.push({ name: item.name })
        itemBreadCrumb.push({ name: findItem.name })
        // return findItem
      }
    } else if (item.type === 2 && item.url === url) {
      return item
    }
  }

  return itemBreadCrumb
}

export { firstMenu }
