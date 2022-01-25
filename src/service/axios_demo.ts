import axios from 'axios'

// 1、axios的实例 本身可以是有类型的
// new Promise<string>((resolve, reject) => {
//     resolve("df")
// }).then(res => {
//     console.log(res);
// })
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })
// 2、默认配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 3000
// axios.defaults.headers = {}
// 3、拦截器
// fn1：请求发送成功 fn2: 请求发送失败
axios.interceptors.request.use(
  (config) => {
    config.url = 'dd'
    return config
  },
  (err) => {
    alert('错误')
    return err
  }
)

// fn1: 数据响应成功 fn2 数据响应失败
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功')
    return res.data
  },
  (err) => {
    console.log('响应失败')
    return err
  }
)

// axios.get('/home/multidata').then((res) => {
//   console.log(res)
// })
