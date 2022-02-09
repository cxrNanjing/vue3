<template>
  <div class="pie-echart">
    <div ref="pieRef" style="height: 300px"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  PropType,
  computed,
  watchEffect
} from 'vue'

import useEchart, { EChartsOption } from '@/hook/useEchart'

interface IPieData {
  value: any
  name: string
}

export default defineComponent({
  name: 'PieEchart',
  props: {
    data: {
      type: Array as PropType<IPieData[]>,
      default: () => []
    }
  },
  setup(props) {
    const pieRef = ref<HTMLElement>()
    const options: any = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    onMounted(() => {
      const { setOptions } = useEchart(pieRef.value!)
      watchEffect(() => {
        setOptions(options.value)
      })
    })

    return {
      pieRef
    }
  }
})
</script>

<style lang="less" scoped></style>
