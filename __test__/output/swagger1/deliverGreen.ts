const request: any = () => {}
import type {
  ApiResponseBoolean,
  ApiResponseComPageFangDongShouHuoDiZhiTianJia,
  BasePageReq,
  FangDongShouHuoDiZhiTianJia,
  QieHuanMoRenDiZhi,
} from './_interfaces.ts'

/** 添加地址 */
export function deliverGreenAddGreenPost(data: FangDongShouHuoDiZhiTianJia): Promise<ApiResponseBoolean> {
  return request.post('/api/deliverGreen/addGreen', data)
}

/** 设置默认地址 */
export function deliverGreenCheckDefaultGreenPost(data: QieHuanMoRenDiZhi): Promise<ApiResponseBoolean> {
  return request.post('/api/deliverGreen/checkDefaultGreen', data)
}

/** 扫落叶地址 */
export function deliverGreenDeleteGreenIdGet(data: { id?: string }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.get(`/api/deliverGreen/deleteGreen/${id}`)
}

/** 分页出行地址 */
export function deliverGreenPageGreenPost(data: BasePageReq): Promise<ApiResponseComPageFangDongShouHuoDiZhiTianJia> {
  return request.post('/api/deliverGreen/pageGreen', data)
}

/** 修改地址 */
export function deliverGreenUpdateGreenPost(data: FangDongShouHuoDiZhiTianJia): Promise<ApiResponseBoolean> {
  return request.post('/api/deliverGreen/updateGreen', data)
}
