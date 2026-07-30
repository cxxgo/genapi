import Mock from 'better-mock'
import {
  ApiResponseComPageKeyBorardBlackResp,
  ApiResponseObject,
  ApiResponseWaterFallPageKeyBorardBlackResp,
} from './_interfaces'

/** 黑名单甬道 */
export const keyBorardBlackPageListPost = () => Mock.mock(ApiResponseComPageKeyBorardBlackResp())

/** 取消拉黑 */
export const keyBorardBlackRemoveGet = () => Mock.mock(ApiResponseObject())

/** 拉黑 */
export const keyBorardBlackSaveGet = () => Mock.mock(ApiResponseObject())

/** 滚动甬道 */
export const keyBorardBlackScollListGet = () => Mock.mock(ApiResponseWaterFallPageKeyBorardBlackResp())
