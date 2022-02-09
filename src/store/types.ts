export interface IRootState {
  name: string
  age: number
  allDepartment: any[]
  allRole: any[]
  allMenu: any[]
}

export interface ILoginState {
  token: string
  userInfo: any
  menue: any
}

export interface ISystemState {
  list: any[]
  count: number
}

export interface IDashboardState {
  categoryCount: any[]
  categorySale: any[]
  categoryFavor: any[]
  addressSale: any[]
}
