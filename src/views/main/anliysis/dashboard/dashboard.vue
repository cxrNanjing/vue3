<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="8">
        <hy-card title="分类商品数量(饼图)">
          <template #default>
            <pie-echart :data="categoryCount"></pie-echart>
          </template>
        </hy-card>
      </el-col>
      <el-col :span="8">
        <hy-card title="不同城市商品销量"></hy-card>
      </el-col>
      <el-col :span="8">
        <hy-card title="分类商品数量(玫瑰图)">
          <template #default>
            <rose-echart :data="categoryCount"></rose-echart>
          </template>
        </hy-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <hy-card title="分类商品销量"></hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品收藏"></hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { myStore } from '@/store'
import HyCard from '@/components/Hy-card.vue'
import PieEchart from '@/components/echarts/pie-echart.vue'
import RoseEchart from '@/components/echarts/rose-echart.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    HyCard,
    PieEchart,
    RoseEchart
  },
  setup() {
    const store = useStore()
    const _store = myStore()
    store.dispatch('dashboardModule/_getGoodsCategoryCount')
    store.dispatch('dashboardModule/_getGoodsCategorySale')
    store.dispatch('dashboardModule/_getGoodsCategoryFavor')
    store.dispatch('dashboardModule/_getGoodsAddressSale')

    // vuex
    // 1、获取分类数据
    const categoryCount = computed(() => {
      return _store.state.dashboardModule.categorySale.map((item) => {
        return { value: item.goodsCount, name: item.name }
      })
    })

    return {
      categoryCount
    }
  }
})
</script>

<style lang="less"></style>
