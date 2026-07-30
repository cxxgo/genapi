import Mock from 'better-mock'
import { ApiResponseBoolean, ApiResponseMapStringobject } from './_interfaces'

/** 添加验山麻杆图片 */
export const sliderAddImagePost = () => Mock.mock(ApiResponseBoolean())

/** 获取校验对象 */
export const sliderCreateVerificationEnumGet = () => Mock.mock(ApiResponseMapStringobject())

/** 验山麻杆码预校验 */
export const sliderPreCheckVerificationEnumGet = () => Mock.mock(ApiResponseBoolean())
