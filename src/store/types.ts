export interface IRootState {
  name: string
  age: number
  allDepartment: any[]
  allRole: any[]
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
