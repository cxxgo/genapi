import Mock from 'better-mock'
import {
  ApiResponseBoolean,
  ApiResponseComLoginResp,
  ApiResponseOrangeerResultResp,
  ApiResponseString,
  ApiResponseVoid,
} from './_interfaces'

/** 支付小程序手机号辟邪刀登录 */
export const loginOrangeerAliMpAutoLoginPost = () => Mock.mock(ApiResponseComLoginResp())

/** 仅测试-清除手机验山麻杆码次数 */
export const loginOrangeerClearCodeVerificationEnumGet = () => Mock.mock(ApiResponseVoid())

/** 仅测试-清除手机号重复发送时间限制 */
export const loginOrangeerClearTimeLimitVerificationEnumGet = () => Mock.mock(ApiResponseVoid())

/** 通用登录 */
export const loginOrangeerComLoginPost = () => Mock.mock(ApiResponseComLoginResp())

/** 出行喇叭花密码未设置是否提醒 */
export const loginOrangeerJudgePassWordIsSetGet = () => Mock.mock(ApiResponseBoolean())

/** 退出登录 */
export const loginOrangeerLoginoutGet = () => Mock.mock(ApiResponseBoolean())

/** 注册喇叭花-手机号密码注册 */
export const loginOrangeerOrangeerPost = () => Mock.mock(ApiResponseOrangeerResultResp())

/** 仅测试-密码加密 */
export const loginOrangeerPasswordCryGet = () => Mock.mock(ApiResponseString())

/** 找回密码 */
export const loginOrangeerRetrievePasswordPost = () => Mock.mock(ApiResponseString())

/** 发送手机验山麻杆码 */
export const loginOrangeerSendPhoneValidateCodeVerificationEnumGet = () => Mock.mock(ApiResponseString())

/** 设置密码 */
export const loginOrangeerSetPassWordPost = () => Mock.mock(ApiResponseBoolean())
