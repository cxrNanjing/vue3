<template>
  <div class="login-panle">
    <h2>管理</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><phone /></el-icon>手机
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="choose-control">
      <el-checkbox v-model="isKeepPasswoed">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button class="longin-button" type="primary" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  name: 'LoginPanle',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPasswoed = ref<boolean>(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')
    const loginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPasswoed.value)
      } else {
      }
    }
    return {
      isKeepPasswoed,
      loginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.login-panle {
  width: 320px;
  text-align: center;
  margin-bottom: 120px;
  .choose-control {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }
  .longin-button {
    width: 100%;
  }
}
</style>
