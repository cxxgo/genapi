const request: any = () => {}
import type { ApiResponseListTreeLong } from './_interfaces.ts'

/** 这个接口出参type是object, 需要处理成any */
export function emoEmoEmployeeTree(data: { emoId?: string }): Promise<ApiResponseListTreeLong> {
  return request.get('/api/emo/emo/employee/tree', data)
}
