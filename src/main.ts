import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { saveStore } from './store'

import 'normalize.css'
import './assets/css/index.less'

// 全局引用

// 按需引入的封装
import { registerElementCpn, registerIconCpn } from './global'

const app = createApp(App)
// registerElementCpn(app)

app.use(registerElementCpn)
app.use(registerIconCpn)
app.use(store)
saveStore()
app.use(router)
app.mount('#app')
