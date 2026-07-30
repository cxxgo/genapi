const request: any = () => {}
import type {
  ApiResponseBoolean,
  ApiResponseDouJiangJiFangDongXinXiXiangQingBiao,
  XiuGaiDouJiangJiXinXi,
  XiuGaiMiMa,
} from './_interfaces.ts'

/** 获取豆浆机房东信息详情 */
export function gratefulCatAcquireInfoGet(): Promise<ApiResponseDouJiangJiFangDongXinXiXiangQingBiao> {
  return request.get('/api/gratefulCat/acquireInfo')
}

/** 修改密码 */
export function gratefulCatUpdateAccPasswordPost(data: XiuGaiMiMa): Promise<ApiResponseBoolean> {
  return request.post('/api/gratefulCat/updateAccPassword', data)
}

/** 修改房东豆浆机信息 */
export function gratefulCatUpdateInfoPost(data: XiuGaiDouJiangJiXinXi): Promise<ApiResponseBoolean> {
  return request.post('/api/gratefulCat/updateInfo', data)
}
