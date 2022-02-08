import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElLoading } from 'element-plus/lib/components'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

import localCache from '@/utils/cache'
interface HYRequestHook<T = AxiosResponse> {
  requestInterceptor?: (cofing: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responeInterceptor?: (confing: T) => T
  responeInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestHook<T>
  showloading?: boolean
}

class HYRequest {
  // 保存实例
  instance: AxiosInstance
  interceptor?: HYRequestHook
  showloading: boolean
  loading?: LoadingInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptors
    this.showloading = config.showloading ?? true
    // 添加所有的实例的拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        if (this.showloading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        //携带token
        const token = localCache.getCache('token')
        if (token) {
          // config.headers.Authorization = `Bearer ${token}`
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (err) => {
        //包含400 500等错误
        this.loading?.close()
        // return err 此时不能使用try catch
        // console.log(err.response)
        return Promise.reject(err.response)
      }
    )

    // this.instance.interceptors.request.use(
    //   this.interceptor?.requestInterceptor, //这是自己传的拦截器
    //   this.interceptor?.requestInterceptorCatch
    // )
    // this.instance.interceptors.response.use(
    //   this.interceptor?.responeInterceptor, //这是自己传的拦截器
    //   this.interceptor?.responeInterceptorCatch
    // )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showloading === false) {
        this.showloading = config.showloading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responeInterceptor) {
            res = config.interceptors.responeInterceptor(res)
          }
          this.showloading = true
          resolve(res)
        })
        .catch((err) => {
          this.showloading = true
          // if (err.response.status === 400) {
          //   alert(err.response.data)
          // }
          // console.log('++++', err.response)
          // 可以在这边处理错误比如400，500等 但不要reject 也可以reject 后续处理
          // console.log(err)
          reject(err)
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
