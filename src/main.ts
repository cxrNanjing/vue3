import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { saveStore } from './store'

import 'normalize.css'
import './assets/css/index.less'
// 按需引入的封装
import { registerElementCpn, registerIconCpn } from './global'
// 全局引用
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const app = createApp(App)
// registerElementCpn(app)
app.config.globalProperties.$filters = {
  timeFormat(val: any) {
    return dayjs.utc(val).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
  }
}

app.use(registerElementCpn)
app.use(registerIconCpn)
app.use(store)
saveStore()
app.use(router)
app.mount('#app')
