import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface HYRequestHook {
  requestInterceptor?: (confing: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responeInterceptor?: (confing: AxiosResponse) => AxiosResponse
  responeInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestHook
}

class HYRequest {
  // 保存实例
  instance: AxiosInstance
  interceptor?: HYRequestHook

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptors
    //添加所有的实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('---')
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor, //这是自己传的拦截器
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responeInterceptor, //这是自己传的拦截器
      this.interceptor?.responeInterceptorCatch
    )
  }

  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
