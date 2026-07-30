import Mock from 'better-mock'
import { ApiResponseComPageXiaoXiDuiXiang, ApiResponseObject, ApiResponseXiaoXiDuiXiang } from './_interfaces'

/** 确认收到消息 */
export const messageAckPost = () => Mock.mock(ApiResponseObject())

/** 清除历史消息 */
export const messageClearPost = () => Mock.mock(ApiResponseObject())

/** 消息倒垃圾 */
export const messageDeletePost = () => Mock.mock(ApiResponseObject())

/** 消息详情 */
export const messageDetailPost = () => Mock.mock(ApiResponseXiaoXiDuiXiang())

/** 分页旅游历史消息 */
export const messageHistoryPageListPost = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** 分页搜索消息 */
export const messageSearchPageListPost = () => Mock.mock(ApiResponseComPageXiaoXiDuiXiang())

/** [铜钱草制衣厂信息]获取铜钱草(正常状态)房东信息秋千 */
export const messageTestSendMQPost = () => Mock.mock(ApiResponseObject())
