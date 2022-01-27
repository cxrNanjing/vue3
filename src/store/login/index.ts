import type { Module } from 'vuex'
import type { IRootState, ILoginState } from '../types'
import {
  accountLoginRequest,
  requestUserInfo,
  requestRole
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menue: ''
    }
  },
  mutations: {
    changeToke(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenu: any) {
      state.menue = userMenu
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      try {
        // 1、实现登陆 保存token
        const loginResult = await accountLoginRequest(payload)
        const { id, token } = loginResult.data
        commit('changeToke', token)
        localCache.setCache('token', token)

        // 2、查询用户信息
        const userInfoResult = await requestUserInfo(id)
        commit('changeUserInfo', userInfoResult.data)
        localCache.setCache('userInfo', userInfoResult.data)

        // 3、请求用户菜单
        const userMenu = await requestRole(userInfoResult.data.id)
        commit('changeUserMenu', userMenu.data)
        localCache.setCache('menue', userMenu.data)
        // 4、跳转到首页
        router.push('/main')
      } catch (error: any) {
        // 这边可以处理400 500 等错误
        // if (err.status === 400) {
        // }
      }
    },

    saveLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToke', token)
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const menue = localCache.getCache('menue')
      if (menue) {
        commit('changeUserMenu', menue)
      }
    }
  },
  getters: {}
}

export default loginModule
