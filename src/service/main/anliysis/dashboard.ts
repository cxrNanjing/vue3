import hyRequest from '@/service'

export function getGoodsCategoryCount() {
  return hyRequest.get<any>({
    url: 'goods/category/count'
  })
}
export function getGoodsCategorySale() {
  return hyRequest.get<any>({
    url: 'goods/category/sale'
  })
}
export function getGoodsCategoryFavor() {
  return hyRequest.get<any>({
    url: 'goods/category/favor'
  })
}
export function getGoodsAddressSale() {
  return hyRequest.get<any>({
    url: 'goods/address/sale'
  })
}
