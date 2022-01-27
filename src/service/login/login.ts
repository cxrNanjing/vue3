import hyRequest from '..'

interface IAccount {
  name: string
  password: string
}

interface IDataTpye {
  code: number
  data: any
}

interface IRole {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

interface IDepartment {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

interface IData {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: IRole
  department: IDepartment
}

interface IRootObject {
  code: number
  data: IData
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataTpye>({
    url: '/login',
    data: account
  })
}

export function requestUserInfo(id: number) {
  return hyRequest.get<IRootObject>({
    url: '/users/' + id
  })
}

export function requestRole(id: number) {
  return hyRequest.get<IDataTpye>({
    url: '/role/' + id + '/menu'
  })
}

export default IRootObject
