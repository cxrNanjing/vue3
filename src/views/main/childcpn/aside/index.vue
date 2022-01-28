<template>
  <div class="aside">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="" />
      <div v-if="!isFold">Vue3+Ts</div>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="bule"
      background-color="#d3dce6"
      text-color="#000"
      :collapse="isFold"
      :unique-opened="true"
      default-active="2"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><avatar /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- <template v-if="subitem.type === 2">
                <template v-if="subitem.children">
                  <el-sub-menu :index="subitem.id + ''">
                    <template #title>
                      <span>{{ subitem.name }}</span>
                    </template>
                    <template v-for="i in subitem.children" :key="i.id">
                      <template v-if="i.type === 3">
                        <el-menu-item :index="i.id + ''">
                          {{ i.name }}
                        </el-menu-item>
                      </template>
                    </template>
                  </el-sub-menu>
                </template> -->
              <!-- <template v-else> -->
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem.url)"
              >
                {{ subitem.name }}
              </el-menu-item>
              <!-- </template> -->
              <!-- </template> -->
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { myStore } from '@/store/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Aside',
  props: {
    isFold: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    //此时store缺少类型是不好的 要区分根类型 和 模块的类型
    const store = myStore()
    const userMenus = computed(() => store.state.loginModule.menue)
    const route = useRouter()

    //点击跳转到各个菜单页面
    const handleMenuItemClick = (url: any) => {
      route.push({
        path: url ?? '/not/found'
      })
    }
    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.aside {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    img {
      height: 40px;
      width: 40px;
    }
    & > div {
      margin-left: 10px;
      color: orange;
    }
  }
  .el-menu {
    border-right: none;
  }
  // /deep/ .el-menu:not(.el-menu--collapse) {
  //  width: 100%;
  // }
  //  /deep/ .el-tooltip__trigger {
  //     left: 25% !important;
  //     // transform: translateX(-50%);
  //   }
}
</style>
