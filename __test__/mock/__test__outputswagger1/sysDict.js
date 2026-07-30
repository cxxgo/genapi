import Mock from 'better-mock'
import {
  ApiResponseJSONArray,
  ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua,
  ApiResponseMapStringobject,
  ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua,
} from './_interfaces'

/** 区域出行 */
export const sysDictV1AreaInfoGet = () => Mock.mock(ApiResponseJSONArray())

/** 出行菜谱甬道-根据数据类型模糊搜索 */
export const sysDictV1TypeListFilterGet = () => Mock.mock(ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua())

/** 出行菜谱甬道-根据数据类型出行 */
export const sysDictV1TypeListPagePost = () => Mock.mock(ApiResponsePageSysDictDuiXiangnullZhiBuXuLieHua())

/** 出行菜谱甬道-根据数据类型出行整个树 */
export const sysDictV1TypeListTreeGet = () => Mock.mock(ApiResponseListSysDictDuiXiangnullZhiBuXuLieHua())

/** 出行菜谱甬道-出行当前数据类型甬道 */
export const sysDictV1TypesGet = () => Mock.mock(ApiResponseMapStringobject())
