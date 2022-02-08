<template>
  <div class="goods">
    <hy-table :propList="propList" :list="goodsList">
      <template #bottom>
        <el-pagination
          v-model:currentPage="pageInfo.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="goodsCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </template>

      <template #createAt="scope">
        {{ $filters.timeFormat(scope.row.createAt) }}
      </template>

      <template #updateAt="scope">
        {{ $filters.timeFormat(scope.row.updateAt) }}
      </template>

      <template #imgUrl="scope">
        <el-image
          style="width: 30px; height: 30px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="contain"
        >
        </el-image>
      </template>

      <template #edit>
        <el-link type="primary" style="margin-right: 8px">修改</el-link>
        <el-link type="primary">删除</el-link>
      </template>

      <template #top>
        <el-button type="primary">新增</el-button>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import HyTable from '@/components/HyTable.vue'
import { propList } from './config'

import { myStore } from '@/store'

export default defineComponent({
  name: 'Goods',
  components: {
    HyTable
  },
  setup() {
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    // vuex
    const store = myStore()
    function getPageListAction(queryInfo: any = {}) {
      store.dispatch('systemModule/getPageListAction', {
        pageUrl: '/goods/list',
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageListAction()
    // click event
    const handleCurrentChange = (val: number) => {
      pageInfo.value.currentPage = val
      getPageListAction()
    }

    const handleSizeChange = (val: number) => {
      pageInfo.value.pageSize = val
      getPageListAction()
    }

    // 从vuex中拿到数据
    const goodsList = computed(() => store.state.systemModule.list)
    const goodsCount = computed(() => store.state.systemModule.count)

    return {
      goodsList,
      goodsCount,
      propList,
      pageInfo,
      handleCurrentChange,
      handleSizeChange
    }
  }
})
</script>

<style lang="less">
// /deep/ .demo-image__error .image-slot {
//   font-size: 30px;
// }
// /deep/.demo-image__error .image-slot .el-icon {
//   font-size: 30px;
// }
// /deep/ .demo-image__error .el-image {
//   width: 100%;
//   height: 200px;
// }
</style>
