<template>
  <div>
    <el-table :data="userList" border style="width: 100%" :fit="false">
      <template v-for="item in propList" :key="item.id">
        <el-table-column
          :fixed="true"
          align="center"
          :prop="item.prop"
          :label="item.label"
          min-width="235"
        >
          <!-- el-table-column只有一个默认插槽  由于这边是循环的 所以默认插槽里的内容是变的 所有改格式的话都是全部改 只能在使用作用域插槽 如果不是循环的 每个column可以用默认插槽就可以了-->
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template> </el-table
    >s
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    userList: {
      type: Object,
      required: true
    },
    propList: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped></style>
