export interface IRootState {
  name: string
  age: number
}

export interface ILoginState {
  token: string
  userInfo: any
  menue: any
}

export interface ISystemState {
  userList: any[]
  userCount: number
}
