import Mock from 'better-mock'
import { ApiResponseBoolean, ApiResponseFangDongXinXi, ApiResponseListFangDongXinXi } from './_interfaces'

/** 出行当前喇叭花美丽房东甬道 */
export const gratefulAcquireGratefulListGet = () => Mock.mock(ApiResponseListFangDongXinXi())

/** 获取当前美丽房东信息 */
export const gratefulAcquirePresentGratefulInfoGet = () => Mock.mock(ApiResponseFangDongXinXi())

/** 渠道制鞋厂解绑房东 */
export const gratefulChannelUnbindPost = () => Mock.mock(ApiResponseBoolean())

/** 切换房东 */
export const gratefulSwitchGratefulGet = () => Mock.mock(ApiResponseBoolean())

/** 出行当前喇叭花未结盟美丽制鞋厂房东甬道 */
export const gratefulUnboundListGet = () => Mock.mock(ApiResponseListFangDongXinXi())
