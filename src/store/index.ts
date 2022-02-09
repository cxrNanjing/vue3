import { createStore, useStore } from 'vuex'
import type { Store } from 'vuex'
import type {
  IRootState,
  ILoginState,
  ISystemState,
  IDashboardState
} from './types'
import loginModule from './login'
import systemModule from './main/system/system'
import dashboardModule from './main/anliysis/dashboard'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'cc',
      age: 2,
      allDepartment: [],
      allRole: [],
      allMenu: []
    }
  },
  mutations: {
    receiveDepartmentList(state, list) {
      state.allDepartment = list
    },
    receiveRoleList(state, list) {
      state.allRole = list
    },
    receiveMenuList(state, list) {
      state.allMenu = list
    }
  },
  actions: {
    async getDepartmentList({ commit }) {
      const departmentResult = await getPageListData('department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData('role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData('menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: menuList } = menuResult.data

      commit('receiveDepartmentList', departmentList)
      commit('receiveRoleList', roleList)
      commit('receiveMenuList', menuList)
    }
  },
  getters: {},
  modules: {
    loginModule,
    systemModule,
    dashboardModule
  }
})

export function saveStore() {
  store.dispatch('loginModule/saveLogin')
  store.dispatch('getDepartmentList')
}

interface ILoginStore {
  loginModule: ILoginState
}

interface IsystemModule {
  systemModule: ISystemState
}
interface IdashboardModule {
  dashboardModule: IDashboardState
}

type IMyStore = ILoginStore & IRootState & IsystemModule & IdashboardModule

//封装自己的store类型
export function myStore(): Store<IMyStore> {
  return useStore()
}

export default store
