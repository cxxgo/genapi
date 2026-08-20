import Mock from 'better-mock'
import { ApiResponseCaiLiaoQingDanZuYiFuShiTu, ApiResponseVoid } from './_interfaces'

/** 获取材料清单组信息（衣服视图，不含模板生成策略等背板字段） */
export const importBusinessConfigsBusinessKeyGet = () => Mock.mock(ApiResponseCaiLiaoQingDanZuYiFuShiTu())

/** 上传 JSON 文件保存材料清单 */
export const importBusinessConfigsBusinessKeyPut = () => Mock.mock(ApiResponseVoid())
