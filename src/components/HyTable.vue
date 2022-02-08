<template>
  <div class="hy-table">
    <div class="hy-table-top">
      <slot name="top"></slot>
    </div>
    <el-table :data="list" border style="width: 100%" v-bind="childrenProps">
      <el-table-column
        type="index"
        label="序号"
        :resizable="false"
        width="60"
      ></el-table-column>
      <template v-for="item in propList" :key="item.id">
        <el-table-column
          show-overflow-tooltip
          :resizable="false"
          align="center"
          :prop="item.prop"
          :label="item.label"
        >
          <!-- el-table-column只有一个默认插槽  由于这边是循环的 所以默认插槽里的内容是变的 所有改格式的话都是全部改 只能在使用作用域插槽 如果不是循环的 每个column可以用默认插槽就可以了-->
          <!-- 如果每个table中有些列表是固定的咋办？如果是固定的 你每次复用的时候 还是会再次写同样的插槽内容的 需要再次封装 -->
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div style="float: right">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    childrenProps: {
      type: Object,
      defalut: () => ({})
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.hy-table-top {
  margin-top: 5px;
}
</style>
