<template>
  <div class="hy-form">
    <div>
      <!-- <slot name="top" :df="df"> {{ df }}</slot> -->
      <slot name="top"></slot>
    </div>
    <el-form label-width="120px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" v-if="!item.isHidden">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.filed}`]"
                />
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-model="formData[`${item.filed}`]"
                >
                  <el-option
                    v-for="i in item.otherOptions"
                    :key="i.value"
                    :label="i.label"
                    :value="i.value"
                  ></el-option>
                </el-select>
              </template>

              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  style="width: 100%"
                  type="daterange"
                  range-separator="到"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  v-model="formData[`${item.filed}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, watch } from 'vue'
import { IHyFormType } from './HyFormType'

export default defineComponent({
  name: 'HyForm',
  props: {
    formItems: {
      type: Array as PropType<IHyFormType[]>,
      default: () => []
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        sm: 12,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      required: true
    },
    df: {
      type: Number
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue) => {
    //     // 这种本质还是改的父组件的值modelValue 不要直接改props 不要违背单向数据流该概念
    //     // console.log('------')
    //     // emit('update:modelValue', newValue)
    //   }
    // })
    const formData = ref({ ...props.modelValue })
    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    })
    return {
      formData
    }
  }
})
</script>

<style lang="less" scoped></style>
