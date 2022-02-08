<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <hy-form v-bind="dialogconfig" v-model="aa"></hy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleComfire">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import HyForm from './HyForm.vue'
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'HyDialog',
  components: {
    HyForm
  },
  props: {
    dialogconfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      defalut: () => ({})
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const aa = ref<any>({})

    //1、监听数据的变化 来设值 非常重要
    watch(
      () => props.defaultInfo,
      (newValue: any) => {
        for (const item of props.dialogconfig.formItems) {
          aa.value[`${item.filed}`] = newValue[`${item.filed}`]
        }
      }
    )

    // 2、click event
    const handleCancel = () => {
      dialogVisible.value = false
    }

    const handleComfire = () => {
      // 如何区分编辑和新增的确定 props.defaultInfo 来发送不同的请求
      dialogVisible.value = false
      if (props.defaultInfo) {
        //来发送请求
      } else {
        //来发送请求
      }
    }

    return {
      dialogVisible,
      aa,
      handleCancel,
      handleComfire
    }
  }
})
</script>

<style lang="less" scoped></style>
