import { createStore, useStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState, ILoginState, ISystemState } from './types'
import loginModule from './login'
import systemModule from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'cc',
      age: 2,
      allDepartment: [],
      allRole: []
    }
  },
  mutations: {
    receiveDepartmentList(state, list) {
      state.allDepartment = list
    },
    receiveRoleList(state, list) {
      state.allRole = list
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
      commit('receiveDepartmentList', departmentList)
      commit('receiveRoleList', roleList)
    }
  },
  getters: {},
  modules: {
    loginModule,
    systemModule
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
type IMyStore = ILoginStore & IRootState & IsystemModule

//封装自己的store类型
export function myStore(): Store<IMyStore> {
  return useStore()
}

export default store
