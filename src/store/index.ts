import { createStore, useStore } from 'vuex'
import type { Store } from 'vuex'
import type { IRootState, ILoginState } from './types'
import loginModule from './login'
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
    loginModule
  }
})

export function saveStore() {
  store.dispatch('loginModule/saveLogin')
}

interface ILoginStore {
  loginModule: ILoginState
}
type IMyStore = ILoginStore & IRootState

//封装自己的store类型
export function myStore(): Store<IMyStore> {
  return useStore()
}

export default store
