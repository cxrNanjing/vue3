import { createStore, useStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState, ILoginState, ISystemState } from './types'
import loginModule from './login'
import systemModule from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'cc',
      age: 2
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    loginModule,
    systemModule
  }
})

export function saveStore() {
  store.dispatch('loginModule/saveLogin')
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
