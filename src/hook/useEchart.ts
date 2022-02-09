import * as echart from 'echarts'
import type { EChartsOption } from 'echarts'

export default function useEchart(el: HTMLElement) {
  // 初始化实例
  const echartInstance = echart.init(el)
  // 设置setOptions
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }

  return {
    echartInstance,
    setOptions
  }
}

export { EChartsOption }
