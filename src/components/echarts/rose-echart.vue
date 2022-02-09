<template>
  <div class="rose-echart">
    <div ref="roseRef" style="height: 300px"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect, onMounted } from 'vue'
import useEchart from '@/hook/useEchart'

export default defineComponent({
  name: 'RoseEchart',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const roseRef = ref()
    const options: any = computed(() => {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            //   dataView: { show: true, readOnly: false },
            //   restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [10, 130],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: props.data
          }
        ]
      }
    })
    onMounted(() => {
      const { setOptions } = useEchart(roseRef.value!)
      watchEffect(() => {
        setOptions(options.value)
      })
    })

    return {
      roseRef
    }
  }
})
</script>

<style lang="less" scoped></style>
