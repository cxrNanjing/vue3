import type { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElInput,
  ElForm,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus/lib/components'

import { Avatar, Phone } from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElFormItem,
  ElCheckbox,
  ElLink
]

const icons = [Avatar, Phone]

//注册组件
export function registerElementCpn(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

//注册icon组件
export function registerIconCpn(app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
