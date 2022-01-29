import hyRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<any>({
    url,
    data: queryInfo
  })
}
