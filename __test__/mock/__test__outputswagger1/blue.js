import Mock from 'better-mock'
import {
  ApiResponseBoolean,
  ApiResponseComPageZhiXieChangChuXing,
  ApiResponseListZhiXieChangChuXing,
  ApiResponseQueryAccInfoResp,
  ApiResponseString,
} from './_interfaces'

/** 账号信息 */
export const blueAccQueryAccPost = () => Mock.mock(ApiResponseQueryAccInfoResp())

/** 加入帽子 */
export const blueDoorAddDoorPost = () => Mock.mock(ApiResponseString())

/** 创建制鞋厂 */
export const blueDoorCreateDoorPost = () => Mock.mock(ApiResponseBoolean())

/** 喇叭花是否加入/拥有制鞋厂 */
export const blueDoorListKeyBorardDoorGet = () => Mock.mock(ApiResponseBoolean())

/** 出行喇叭花制鞋厂甬道 */
export const blueDoorListKeyBorardDoorPost = () => Mock.mock(ApiResponseListZhiXieChangChuXing())

/** 分页出行全部制鞋厂甬道 */
export const blueDoorPageAllDoorPost = () => Mock.mock(ApiResponseComPageZhiXieChangChuXing())
