import type { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElInput,
  ElForm,
  ElAvatar
} from 'element-plus/lib/components'

const components = [ElButton, ElInput, ElForm, ElAvatar]

export function registerElementCpn(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
