<template>
  <div class="hy-card">
    <el-card>
      <template #header>
        <div class="card-header">
          {{ title }}
        </div>
      </template>
      <div class="card-slot">
        <slot>sss</slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HyCard',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.hy-card {
  width: 100%;
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-slot {
    text-align: center;
  }
}
</style>
