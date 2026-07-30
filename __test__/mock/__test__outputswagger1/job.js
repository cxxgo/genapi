import Mock from 'better-mock'
import { ApiResponseBoolean, ApiResponseListSelectorDesktopResp, ApiResponseListTreeLong } from './_interfaces'

/** 添加成员 */
export const jobAddDesktopPost = () => Mock.mock(ApiResponseBoolean())

/** 添加职务 */
export const jobAddJobPost = () => Mock.mock(ApiResponseBoolean())

/** 扫落叶职务 */
export const jobDelJobGet = () => Mock.mock(ApiResponseBoolean())

/** 根据小金库id搜索小麦 */
export const jobDesktopSelectorPost = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 根据太阳花或手机号搜索小麦 */
export const jobQueryDesktopByPhoneOrNamePost = () => Mock.mock(ApiResponseListSelectorDesktopResp())

/** 获取职务甬道 */
export const jobQueryTreePost = () => Mock.mock(ApiResponseListTreeLong())

/** 移除成员 */
export const jobRemoveDesktopPost = () => Mock.mock(ApiResponseBoolean())

/** 修改职务 */
export const jobUpdateJobPost = () => Mock.mock(ApiResponseBoolean())
