// 统一出口
import HYRequest from './request'
import { BASE_URL } from './request/config'
// import { ElLoading } from 'element-plus/lib/components'
//此时如果有多个接口 有可能BASE_URL时不一样的
// 此处要有拦截器 是不同的  有可能 所以要在class中创建 但是config有没有这个类型需要来交叉
// import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
// let loading: LoadingInstance

const hyRequest = new HYRequest({
  baseURL: BASE_URL
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     return config
  //   },
  //   requestInterceptorCatch: (err) => {
  //     console.log(err)
  //     return err
  //   },
  //   responeInterceptor: (res) => {
  //     const data = res.data
  //     //移除loading
  //     // loading.close()
  //     if (data.returnCode === '-1001') {
  //       console.log('请求失败~')
  //     } else {
  //       console.log(data)
  //       return data.data
  //     }
  //   },

  //   responeInterceptorCatch: (err) => {
  //     //根据httpErrorCode的显示
  //     // 移除loading
  //     // loading.close()
  //     if (err.response.status === '400') {
  //       console.log('404的错误')
  //     }
  //     return err
  //   }
  // }
})

export default hyRequest
