import type { IForm } from '@/components/HyFormType'
export const dialogconfig: IForm = {
  colLayout: { span: 24 },
  formItems: [
    {
      filed: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      filed: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      filed: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      filed: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      filed: 'departmentId',
      label: '部门',
      type: 'select',
      placeholder: '请选择部门',
      otherOptions: []
    },
    {
      filed: 'roleId',
      label: '角色',
      type: 'select',
      placeholder: '请选择角色',
      otherOptions: []
    }
  ]
}
