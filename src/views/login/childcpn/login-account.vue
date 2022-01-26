<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'LoginAccount',
  setup() {
    // 数据的绑定
    const account = reactive({
      name: '',
      password: ''
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

    return {
      account,
      rules
    }
  }
})
</script>

<style></style>
