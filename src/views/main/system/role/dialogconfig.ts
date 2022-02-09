import type { IForm } from '@/components/HyFormType'
export const dialogconfig: IForm = {
  colLayout: { span: 24 },
  formItems: [
    {
      filed: 'name',
      label: '角色',
      type: 'input',
      placeholder: '请输入角色'
    },
    {
      filed: 'intro',
      label: '角色介绍',
      type: 'input',
      placeholder: '请输入角色介绍'
    }
  ]
}
