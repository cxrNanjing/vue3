<template>
  <div class="head">
    <div class="icon">
      <el-icon :size="30" @click="changeFold">
        <fold v-if="isFold" />
        <expand v-else />
      </el-icon>
    </div>
    <div class="content">
      <div class="content-left">
        <nav-breadcrumb :breadcrumbMenu="breadcrumbMenu"></nav-breadcrumb>
      </div>
      <div>
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import NavBreadcrumb from './nav-breadcrumb.vue'
import { pathToBreakMenu } from '@/utils/map-menu'
import { myStore } from '@/store/index'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Head',
  components: {
    UserInfo,
    NavBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const changeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //获取当前菜单 和上级标题
    // 拿到菜单
    const menus = myStore().state.loginModule.menue
    const breadcrumbMenu = computed(() =>
      pathToBreakMenu(menus, useRoute().path)
    )
    return {
      changeFold,
      isFold,
      breadcrumbMenu
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
  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .content-left {
      margin-left: 10px;
    }
  }
}
</style>
