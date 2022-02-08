type Itype = 'input' | 'select' | 'date-picker' | 'password'

export interface IHyFormType {
  label: string
  type: Itype
  placeholder: any
  otherOptions?: any
  filed: string //用来搜集表单数据
  isHidden?: boolean
}

export interface IForm {
  formItems: IHyFormType[]
  colLayout?: Object
}
