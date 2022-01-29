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
              <el-button type="primary">搜索</el-button>
              <el-button type="primary">重置</el-button>
            </div>
          </template>
        </hy-form>
      </div>
      <div class="user-table">
        <hy-table :userList="userList" :propList="propList">
          <template #enable="scope">
            <el-button>{{
              scope.row.enable === 1 ? '启用' : '禁用'
            }}</el-button>
          </template>
        </hy-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import HyForm from '@/components/HyForm.vue'
import HyTable from '@/components/HyTable.vue'
import { formDataConfig } from './config'
import { myStore } from '@/store'

export default defineComponent({
  name: 'User',
  components: {
    HyForm,
    HyTable
  },
  setup() {
    // 在user组件中收集数据
    const getFormData = ref({
      id: '',
      name: '',
      password: '',
      sports: '',
      time: ''
    })

    // vuex
    const store = myStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    // 从vuex中拿到数据
    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)
    const propList = [
      { prop: 'name', label: '用户名', id: 1 },
      { prop: 'realname', label: '真实姓名', id: 2 },
      { prop: 'cellphone', label: '手机号码', id: 3 },
      { prop: 'enable', label: '是否禁用', id: 4 },
      { prop: 'createAt', label: '创建时间', id: 5 },
      { prop: 'updateAt', label: '修改时间', id: 6 }
    ]

    return {
      formDataConfig,
      getFormData,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style lang="less"></style>
