import Mock from 'better-mock'
import {
  ApiResponseComPageContactResp,
  ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing,
  ApiResponseObject,
  ApiResponseXiaoDaoXiaoXi,
} from './_interfaces'

/** 清空小道消息 */
export const hiallClearHiallPost = () => Mock.mock(ApiResponseObject())

/** 清空小道消息 */
export const hiallClearHiallPost = () => Mock.mock(ApiResponseObject())

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreatePost = () => Mock.mock(ApiResponseObject())

/** 创建小道消息/发起瓜子天/进入部落瓜子 */
export const hiallCreatePost = () => Mock.mock(ApiResponseXiaoDaoXiaoXi())

/** 常用联系人 */
export const hiallOftenContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 常用联系人 */
export const hiallOftenContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息秋千 */
export const hiallPageListPost = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())

/** 小道消息秋千 */
export const hiallPageListPost = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())

/** 最近联系人 */
export const hiallRecentContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 最近联系人 */
export const hiallRecentContactPost = () => Mock.mock(ApiResponseComPageContactResp())

/** 小道消息秋千 */
export const hiallUnreadListPost = () => Mock.mock(ApiResponseComPageXiaoDaoXiaoXiQiuQianXiangYing())
