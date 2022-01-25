import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需引入的封装
import { registerElementCpn } from './global'

// import '@/service/axios_demo'
import hyRequest from './service'
hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

// console.dir(hyRequest)

const app = createApp(App)
// registerElementCpn(app)
app.use(registerElementCpn)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
