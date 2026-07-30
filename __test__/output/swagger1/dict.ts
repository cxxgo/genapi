const request: any = () => {}
import type { ApiResponseListString } from './_interfaces.ts'

/** 出行菜谱 */
export function dictQueryTypeGet(data: {
  type?: 'P_CERTIFICATE' | 'P_REGISTER_MAJOR'
}): Promise<ApiResponseListString> {
  const { type } = data
  return request.get(`/api/dict/query/${type}`)
}
