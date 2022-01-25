<template>
  <div>
    login
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script lang="ts">
import { ElButton } from 'element-plus/lib/components'

import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
