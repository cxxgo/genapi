const request: any = () => {}
import type { ApiResponseBoolean, BuLuoXinXiBirdDetailReq } from './_interfaces.ts'

/** 是否是部落成员 */
export function existInBirdPost(data: BuLuoXinXiBirdDetailReq): Promise<ApiResponseBoolean> {
  return request.post('/existInBird', data)
}
