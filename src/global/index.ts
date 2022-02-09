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
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRadioGroup,
  ElRadioButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCard,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
} from 'element-plus/lib/components'

import {
  Avatar,
  Expand,
  Fold,
  Phone,
  ArrowDown,
  Search
} from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElRadioGroup,
  ElRadioButton,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCard,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDatePicker,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree
]

const icons = [Avatar, Phone, Fold, Expand, ArrowDown, Search]

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
