import Mock from 'better-mock'
import { ApiResponse, ApiResponseListBirdF2fKeyBorardListResp, ApiResponseLong } from './_interfaces'

/** 进入部落瓜子 */
export const birdf2fEnterBirdPost = () => Mock.mock(ApiResponseLong())

/** 获取秋千 */
export const birdf2fListPost = () => Mock.mock(ApiResponseListBirdF2fKeyBorardListResp())

/** 保存随机数 */
export const birdf2fSaveRandomPost = () => Mock.mock(ApiResponse())
