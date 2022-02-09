<template>
  <div class="role">
    <hy-table :propList="propList" :list="roleList">
      <template #createAt="scope">
        {{ $filters.timeFormat(scope.row.createAt) }}
      </template>

      <template #updateAt="scope">
        {{ $filters.timeFormat(scope.row.updateAt) }}
      </template>

      <template #edit="scope">
        <el-link
          type="primary"
          style="margin-right: 8px"
          @click="handleEditData(scope)"
          >修改</el-link
        >
        <el-link type="primary" @click="handleDelete(scope)">删除</el-link>
      </template>

      <template #top>
        <el-button type="primary" @click="handleNewData">新增</el-button>
      </template>
    </hy-table>
    <hy-dialog
      :dialogconfig="dialogconfig"
      :title="hyDialogTitle"
      :defaultInfo="getDialogData"
      ref="hyDialogRef"
    >
      <template #default>
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :default-checked-keys="ss"
          @check="handleCheckChange"
          :props="{ children: 'children', label: 'name' }"
        />
      </template>
    </hy-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import HyTable from '@/components/HyTable.vue'
import HyDialog from '@/components/HyDialog.vue'
import { propList } from './roleconfig'
import { dialogconfig } from './dialogconfig'
import { useStore } from 'vuex'
import { myStore } from '@/store'

import { mapMenuToTree } from '@/utils/map-menu'

export default defineComponent({
  name: 'Role',
  components: {
    HyTable,
    HyDialog
  },
  setup() {
    const hyDialogTitle = ref('')
    const hyDialogRef = ref()
    const getDialogData = ref({})
    // let defaultKeys: any
    const ss = ref<any>([])
    // vuex
    const store = useStore()
    const _store = myStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: 'role/list',
      queryInfo: {
        offset: 0,
        size: 200
      }
    })
    const roleList = computed(() => _store.state.allRole)
    const menus = computed(() => _store.state.allMenu)
    const handleDelete = (val: any) => {
      store.dispatch('systemModule/deletePageData', {
        pageUrl: `role/${val.row.id}`
      })
    }

    const handleEditData = (scope: any) => {
      const ishidden = dialogconfig.formItems.find(
        (item) => item.filed === 'password'
      )
      if (ishidden) {
        ishidden.isHidden = true
      }
      getDialogData.value = { ...scope.row }
      hyDialogRef.value.dialogVisible = true
      hyDialogTitle.value = '编辑'

      // 如何数据回显 1、用默认default-checked-keys 2、也可以用拿到eltree的methods设置值的方式
      const defaultKeys = computed(() => mapMenuToTree(scope.row.menuList))
      ss.value = defaultKeys.value
    }

    const handleNewData = () => {
      const ishidden = dialogconfig.formItems.find(
        (item) => item.filed === 'password'
      )
      if (ishidden) {
        ishidden.isHidden = false
      }
      getDialogData.value = {}
      ss.value = []
      hyDialogRef.value.dialogVisible = true
      hyDialogTitle.value = '新建'
    }

    const handleCheckChange = (data1: any, data2: any) => {
      const { checkedKeys } = data2
    }

    return {
      propList,
      roleList,
      menus,
      handleDelete,
      handleEditData,
      handleNewData,
      handleCheckChange,
      hyDialogTitle,
      dialogconfig,
      hyDialogRef,
      getDialogData,
      ss
    }
  }
})
</script>

<style lang="less"></style>
