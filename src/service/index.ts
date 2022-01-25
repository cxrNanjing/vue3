// 统一出口
import HYRequest from './request'
import { BASE_URL } from './request/config'

//此时如果有多个接口 有可能BASE_URL时不一样的
// 此处要有拦截器 是不同的  有可能 所以要在class中创建 但是config有没有这个类型需要来交叉
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log(config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log(err)
      return err
    },
    responeInterceptor: (res) => {
      console.log(res)
      return res.data
    },
    responeInterceptorCatch: (err) => {
      console.log(err)
      return err
    }
  }
})

export default hyRequest
