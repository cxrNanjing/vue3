import { IRootState, ISystemState } from '@/store/types'
import type { Module } from 'vuex'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state, userCount) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, { pageUrl, queryInfo }) {
      const data = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = data.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule
