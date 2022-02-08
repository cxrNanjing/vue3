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
      filed: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      filed: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      filed: 'enable',
      label: '用户状态',
      type: 'select',
      placeholder: '请选择用户状态',
      otherOptions: [
        {
          value: 1,
          label: '启用'
        },
        {
          value: 0,
          label: '禁用'
        }
      ]
    },
    {
      filed: 'createAt',
      label: '创建时间',
      type: 'date-picker',
      placeholder: '请输入时间'
    }
  ]
}
