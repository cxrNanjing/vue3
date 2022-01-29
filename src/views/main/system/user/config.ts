import type { IForm } from '@/components/HyFormType'
export const formDataConfig: IForm = {
  colLayout: { span: 8 },
  formItems: [
    {
      filed: 'id',
      label: 'id1212',
      type: 'input',
      placeholder: '请输入id'
    },
    {
      filed: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      filed: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码'
    },
    {
      filed: 'sports',
      label: '喜欢的运动',
      type: 'select',
      placeholder: '请选择喜欢运动名称',
      otherOptions: [
        {
          value: 'basketball',
          label: '篮球'
        },
        {
          value: 'football',
          label: '足球'
        }
      ]
    },
    {
      filed: 'time',
      label: '创建时间',
      type: 'date-picker',
      placeholder: '请输入时间'
    }
  ]
}
