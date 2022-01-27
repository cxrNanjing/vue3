<template>
  <div class="head">
    <div class="icon">
      <el-icon :size="30" @click="changeFold">
        <fold v-if="isFold" />
        <expand v-else />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Head',
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      changeFold,
      isFold
    }
  }
})
</script>

<style scoped lang="less">
.head {
  height: 100%;
  display: flex;
  align-items: center;
  .icon {
    margin-left: -7px;
  }
}
</style>
