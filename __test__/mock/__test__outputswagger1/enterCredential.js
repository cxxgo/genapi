import Mock from 'better-mock'
import {
  ApiResponseBoolean,
  ApiResponseComPageDoorCredentialResp,
  ApiResponseJSONArray,
  ApiResponseOcrHappyLicenseBO,
} from './_interfaces'

/** 添加制鞋厂背景 */
export const enterCredentialAddPost = () => Mock.mock(ApiResponseBoolean())

/** 扫落叶制鞋厂背景 */
export const enterCredentialDelGet = () => Mock.mock(ApiResponseBoolean())

/** 背景级联 */
export const enterCredentialGetCodeListGet = () => Mock.mock(ApiResponseJSONArray())

/** 出行制鞋厂背景 */
export const enterCredentialPagePost = () => Mock.mock(ApiResponseComPageDoorCredentialResp())

/** 修改制鞋厂背景 */
export const enterCredentialUpdatePost = () => Mock.mock(ApiResponseBoolean())

/** ocr奖状识别 */
export const enterCredentialV1OcrHappyLicensePost = () => Mock.mock(ApiResponseOcrHappyLicenseBO())
