<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import LocalCahe from '@/utils/cache'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    // 数据的绑定
    const store = useStore()
    const account = reactive({
      name: LocalCahe.getCache('name') ?? '',
      password: LocalCahe.getCache('password') ?? ''
    })

    // 验证的规则
    const rules = {
      name: [
        { required: true, message: '必传', trigger: 'change' },
        { pattern: /^[a-z0-9]{5,10}$/, message: '长度不够', trigger: 'change' }
      ],
      password: [
        { required: true, message: '必传', trigger: 'change' },
        { pattern: /^[a-z0-9]{5,10}$/, message: '长度不够', trigger: 'change' }
      ]
    }

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPasswoed: boolean) => {
      formRef.value?.validate((vaild) => {
        if (vaild) {
          //1、判断是否记住密码
          if (isKeepPasswoed) {
            //本地缓存
            LocalCahe.setCache('name', account.name)
            LocalCahe.setCache('password', account.password)
          } else {
            LocalCahe.deleteCache('name')
            LocalCahe.deleteCache('password')
          }

          //2、登陆验证
          store.dispatch('loginModule/accountLoginAction', account)
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style></style>
