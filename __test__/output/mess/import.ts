const request: any = () => {}
import type { ApiResponseVoid } from './_interfaces.ts'

/** 获取材料清单组信息（衣服视图，不含模板生成策略等背板字段） */
export function importBusinessConfigsBusinessKeyGet(data: {
  // 业务Key
  businessKey?: string
}): Promise<any> {
  const { businessKey } = data
  return request.get(`/api/import/business-configs/${businessKey}`)
}

/** 上传 JSON 文件保存材料清单 */
export function importBusinessConfigsBusinessKeyPut(data: {
  // 业务Key
  businessKey?: string
  file?: File
}): Promise<ApiResponseVoid> {
  const { businessKey, file } = data
  return request.put(
    `/api/import/business-configs/${businessKey}`,
    { file },
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )
}
