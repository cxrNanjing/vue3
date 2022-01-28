<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isFold ? 'auto' : '220px'">
        <Aside :isFold="isFold" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header" height="40px">
          <Head @foldChange="foldChange" />
        </el-header>
        <el-main class="page-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Aside from './childcpn/aside/index.vue'
import Head from './childcpn/header/index.vue'
export default defineComponent({
  components: {
    Aside,
    Head
  },
  setup() {
    //折叠
    const isFold = ref(false)
    const foldChange = (val: boolean) => {
      isFold.value = val
    }
    return {
      foldChange,
      isFold
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;
  .main-container {
    height: 100%;
    width: 100%;
    .el-aside {
      text-align: center;
      background-color: #d3dce6;
    }
    .page {
      .page-header {
        text-align: center;
        background-color: palegoldenrod;
      }
      .page-main {
      }
    }
  }
}
</style>
