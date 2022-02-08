<template>
  <div class="menu">
    <hy-table
      :list="menuList"
      :propList="propList"
      :childrenProps="childrenProps"
    >
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import HyTable from '@/components/HyTable.vue'
import { myStore } from '@/store'

import { propList } from './config'

export default defineComponent({
  name: 'Menu',
  components: {
    HyTable
  },
  setup() {
    const store = myStore()
    const childrenProps = ref({
      rowKey: 'id',
      treeProps: {
        children: 'children'
      }
    })
    function getPageListAction(queryInfo: any = {}) {
      store.dispatch('systemModule/getPageListAction', {
        pageUrl: '/menu/list',
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
    getPageListAction()

    // 从vuex中拿到数据
    const menuList = computed(() => store.state.systemModule.list)
    return {
      propList,
      menuList,
      childrenProps
    }
  }
})
</script>

<style lang="less"></style>
