<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbMenu" :key="item.id">
        <el-breadcrumb-item :to="{ path: item.url }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { MenuBreadCrumb } from './index'

export default defineComponent({
  name: 'NavBreadcrumb',
  props: {
    breadcrumbMenu: {
      type: Array as PropType<MenuBreadCrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped></style>
