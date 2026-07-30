import Mock from 'better-mock'
import { ApiResponseBoolean, ApiResponseComPageFangDongShouHuoDiZhiTianJia } from './_interfaces'

/** 添加地址 */
export const deliverGreenAddGreenPost = () => Mock.mock(ApiResponseBoolean())

/** 设置默认地址 */
export const deliverGreenCheckDefaultGreenPost = () => Mock.mock(ApiResponseBoolean())

/** 扫落叶地址 */
export const deliverGreenDeleteGreenIdGet = () => Mock.mock(ApiResponseBoolean())

/** 分页出行地址 */
export const deliverGreenPageGreenPost = () => Mock.mock(ApiResponseComPageFangDongShouHuoDiZhiTianJia())

/** 修改地址 */
export const deliverGreenUpdateGreenPost = () => Mock.mock(ApiResponseBoolean())
