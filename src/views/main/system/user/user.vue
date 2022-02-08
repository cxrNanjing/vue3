<template>
  <div class="user">
    <el-card class="box-card">
      <div class="search">
        <!-- //如果传参很多使用对象形式 -->
        <hy-form v-bind="formDataConfig" v-model="getFormData">
          <template #top>
            <h2 style="text-align: left">高级搜索</h2>
          </template>
          <template #bottom>
            <div style="text-align: right">
              <el-button type="primary" @click="handleSearch">搜索</el-button>
              <el-button type="primary" @click="handleReset">重置</el-button>
            </div>
          </template>
        </hy-form>
      </div>
      <div class="user-table">
        <hy-table :list="userList" :propList="propList">
          <template #enable="scope">
            <el-button>{{
              scope.row.enable === 1 ? '启用' : '禁用'
            }}</el-button>
          </template>

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
            <el-link type="primary" @click="handleDelete(scope.row)"
              >删除</el-link
            >
          </template>

          <template #top>
            <el-button type="primary" @click="handleNewData">新增</el-button>
          </template>

          <template #bottom>
            <el-pagination
              v-model:currentPage="pageInfo.currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="pageInfo.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="userCount"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </template>
        </hy-table>
      </div>
      <hy-dialog
        :dialogconfig="dialogconfigRef"
        ref="hyDialogRef"
        :defaultInfo="getDialogData"
        :title="hyDialogTitle"
      ></hy-dialog>
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import HyForm from '@/components/HyForm.vue'
import HyTable from '@/components/HyTable.vue'
import HyDialog from '@/components/HyDialog.vue'
import { formDataConfig } from './config'
import { dialogconfig } from './dialogconfig'
import { myStore } from '@/store'
import _store from '@/store'

export default defineComponent({
  name: 'User',
  components: {
    HyForm,
    HyTable,
    HyDialog
  },
  setup() {
    // 在user组件中收集数据
    // 1、根据config.ts配置文件获取字段
    const formOriginData: any = {}
    const formData = formDataConfig.formItems ?? []
    for (const item of formData) {
      formOriginData[item.filed] = ''
    }
    const getFormData = ref(formOriginData)

    // 2、dialog初始数据
    const getDialogData = ref({})
    const hyDialogRef = ref()
    const hyDialogTitle = ref('')

    // 2.1获取store中部门和角色的数据
    const dialogconfigRef = computed(() => {
      const departmentItem = dialogconfig.formItems.find(
        (item) => item.filed === 'departmentId'
      )
      departmentItem!.otherOptions = _store.state.allDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })

      const roleItem = dialogconfig.formItems.find(
        (item) => item.filed === 'roleId'
      )
      roleItem!.otherOptions = _store.state.allRole.map((item) => {
        return { label: item.name, value: item.id }
      })

      return dialogconfig
    })

    // 3、分页器数据
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    // 4、vuex
    const store = myStore()
    function getPageListAction(queryInfo: any = {}) {
      store.dispatch('systemModule/getPageListAction', {
        pageUrl: '/users/list',
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageListAction()

    const propList = [
      { prop: 'name', label: '用户名', id: 1, slotName: 'name' },
      { prop: 'realname', label: '真实姓名', id: 2, slotName: 'realname' },
      { prop: 'cellphone', label: '手机号码', id: 3, slotName: 'cellphone' },
      { prop: 'enable', label: '是否禁用', id: 4, slotName: 'enable' },
      { prop: 'createAt', label: '创建时间', id: 5, slotName: 'createAt' },
      { prop: 'updateAt', label: '修改时间', id: 6, slotName: 'updateAt' },
      { prop: 'edit', label: '操作', id: 7, slotName: 'edit' }
    ]

    // 5、click event

    const handleCurrentChange = (val: number) => {
      pageInfo.value.currentPage = val
      getPageListAction(getFormData.value)
    }

    const handleSizeChange = (val: number) => {
      pageInfo.value.pageSize = val
      getPageListAction(getFormData.value)
    }

    const handleSearch = () => {
      getPageListAction(getFormData.value)
    }

    const handleReset = () => {
      for (const key in formOriginData) {
        getFormData.value[`${key}`] = formOriginData[key]
      }
      getPageListAction()
    }

    const handleDelete = (val: any) => {
      console.log(val)
      store.dispatch('systemModule/deletePageData', {
        pageUrl: `users/${val.id}`
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
    }

    const handleNewData = () => {
      const ishidden = dialogconfig.formItems.find(
        (item) => item.filed === 'password'
      )
      if (ishidden) {
        ishidden.isHidden = false
      }
      getDialogData.value = {}
      hyDialogRef.value.dialogVisible = true
      hyDialogTitle.value = '新建'
    }
    // 6、从vuex中拿到数据
    const userList = computed(() => store.state.systemModule.list)
    const userCount = computed(() => store.state.systemModule.count)

    return {
      formDataConfig,
      dialogconfigRef,
      getDialogData,
      getFormData,
      userList,
      userCount,
      propList,
      handleSearch,
      handleReset,
      pageInfo,
      handleCurrentChange,
      handleSizeChange,
      handleDelete,
      handleEditData,
      handleNewData,
      hyDialogRef,
      hyDialogTitle
    }
  }
})
</script>

<style lang="less"></style>
