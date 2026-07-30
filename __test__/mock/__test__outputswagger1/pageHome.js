import Mock from 'better-mock'
import { ApiResponseBoolean, ApiResponseListQueryCatPageHomeResp, ApiResponseQueryJudgeClaimResp } from './_interfaces'

/** 认领豆浆机信息 */
export const pageHomeClaimClaimIdGet = () => Mock.mock(ApiResponseBoolean())

/** 排除豆浆机信息 */
export const pageHomeExcludeClaimIdGet = () => Mock.mock(ApiResponseBoolean())

/** 出行认领操作结果 */
export const pageHomeJudgeGet = () => Mock.mock(ApiResponseQueryJudgeClaimResp())

/** 出行放行结果 */
export const pageHomeQueryGet = () => Mock.mock(ApiResponseListQueryCatPageHomeResp())
