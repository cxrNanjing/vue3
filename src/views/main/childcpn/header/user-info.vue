<template>
  <div class="user-info">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{ name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { myStore } from '@/store/index'
export default defineComponent({
  name: 'UserInfo',
  setup() {
    const store = myStore()
    const name = computed(() => store.state.loginModule.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.user-info:hover {
  cursor: pointer;
}
</style>
