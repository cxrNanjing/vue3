import { IRootState, ISystemState } from '@/store/types'
import type { Module } from 'vuex'

import { getPageListData, deletePageData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      list: [],
      count: 0
    }
  },
  mutations: {
    changeUserList(state, list) {
      state.list = list
    },
    changeUserCount(state, count) {
      state.count = count
    }
  },
  actions: {
    //这边返回的数据格式是一样的数以可以这么写， 不然要通过url来判断
    async getPageListAction({ commit }, { pageUrl, queryInfo }) {
      const data = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = data.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    },
    async deletePageData({ commit }, { pageUrl }) {
      const data = await deletePageData(pageUrl)
    }
  }
}

export default systemModule
