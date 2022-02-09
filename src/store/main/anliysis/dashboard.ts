import { IRootState, IDashboardState } from '@/store/types'
import type { Module } from 'vuex'
import {
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale
} from '@/service/main/anliysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      addressSale: [],
      categoryCount: [],
      categoryFavor: [],
      categorySale: []
    }
  },
  mutations: {
    receiveAddressSale(state, val) {
      state.addressSale = val
    },

    receiveCategoryCount(state, val) {
      state.categoryCount = val
    },

    receiveCategoryFavor(state, val) {
      state.categoryFavor = val
    },

    receiveCategorySale(state, val) {
      state.categorySale = val
    }
  },
  actions: {
    async _getGoodsAddressSale({ commit }) {
      const { data } = await getGoodsAddressSale()
      commit('receiveAddressSale', data)
    },

    async _getGoodsCategoryCount({ commit }) {
      const { data } = await getGoodsCategoryCount()
      commit('receiveCategoryCount', data)
    },

    async _getGoodsCategorySale({ commit }) {
      const { data } = await getGoodsCategorySale()
      commit('receiveCategorySale', data)
    },

    async _getGoodsCategoryFavor({ commit }) {
      const { data } = await getGoodsCategoryFavor()
      commit('receiveCategoryFavor', data)
    }
  }
}

export default dashboardModule
