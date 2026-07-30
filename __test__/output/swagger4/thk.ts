const request: any = () => {}
import type {
  AddTastyCredentialProjectReq,
  ApiResponse,
  ApiResponseAppChaXianBanShuiGuoDaoFanHui,
  ApiResponseBoolean,
  ApiResponseChaXianBanGongShangShuiGuoDaoFanHui,
  ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui,
  ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing,
  ApiResponseComPageChaXianBanErJiJuanXinCai,
  ApiResponseComPageChaXianBanFenZhiJiGou,
  ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseComPageChaXianBanHeiMingDanXiangYing,
  ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseComPageEntCredPlanResp,
  ApiResponseComPageErJiJuanXinCaiShuiGuoDao,
  ApiResponseComPageGuanTouShuRenLingRiZhi,
  ApiResponseComPageJiJiXieXiaGongSiXiangYing,
  ApiResponseComPageJiXuDaShuiNiuWeiShengSu,
  ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseComPageJuanXinCaiGongZuoYeJi,
  ApiResponseComPageQingMingCaoZhiXiaoChouYu,
  ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing,
  ApiResponseComPageString,
  ApiResponseComPageTastyCredExamResultResp,
  ApiResponseComPageYeJiRenLingRiZhi,
  ApiResponseEntCredOverviewResp,
  ApiResponseEntCredPlanMainResp,
  ApiResponseFridayAllCountResp,
  ApiResponseFridayBranchRawResp,
  ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi,
  ApiResponseGeRenShuiGuoDao,
  ApiResponseGuanTouShuHeGongChengShuiBei,
  ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing,
  ApiResponseJiXuDaShuiNiuWeiShengSu,
  ApiResponseJSONArray,
  ApiResponseJSONObject,
  ApiResponseJuanXinCaiSuoYouShuiGuoDao,
  ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanErJiJuanXinCai,
  ApiResponseListChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseListChaXianBanHeiMingDanXiangYing,
  ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanQingMingCaoZhiWuShu,
  ApiResponseListChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseListChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseListDaShuiNiuJingLiShuiGuoDao,
  ApiResponseListEntCredentialExpireAlertResp,
  ApiResponseListErJiJuanXinCaiTongJi,
  ApiResponseListHrTastyCredentialDO,
  ApiResponseListJiaTingChengYuanShuiGuoDao,
  ApiResponseListJiJiXieXiaGongSiXiangYing,
  ApiResponseListJuanXinCaiChiGuanTouQingKuang,
  ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseListJuanXinCaiGongZuoJingLi,
  ApiResponseListJuanXinCaiGongZuoYeJi,
  ApiResponseListMap,
  ApiResponseListObject,
  ApiResponseListString,
  ApiResponseListTastyCredEvalInfo,
  ApiResponseListTastyCredUpRecommendResp,
  ApiResponseListVOResp,
  ApiResponseListYinXingKaShuiGuoDao,
  ApiResponseMap,
  ApiResponseMapStringobject,
  ApiResponseMapStringstring,
  ApiResponsePlanCreditResp,
  ApiResponsePlanTastyResp,
  ApiResponseQingMingCaoZhiXiaoChouYu,
  ApiResponseSetString,
  ApiResponseSheBaoZhangHao,
  ApiResponseShengJiTiaoJianJuanXinCaiXiangQing,
  ApiResponseString,
  ApiResponseTastyAllCountResp,
  ApiResponseTastyCredEvalInfo,
  ApiResponseTastyCredUpRecommendResp,
  ApiResponseTastyIntroductionInfo,
  ApiResponseXueXinZhangHao,
  ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui,
  ChaXianBanFenZhiJiGouGengXinQingQiu,
  ChaXianBanHuiZongFenYeQingQiu,
  ChaXianBanQingMingCaoZhiGuanLi,
  ChaXianBanQingMingCaoZhiWuShu,
  ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu,
  ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian,
  EntCredPlanMainReq,
  EntCredStartReq,
  EntUpgradeValidReq,
  FridayCredentialAddReq,
  FridayCredentialNameReq,
  FridayMainUpdateReq,
  GengXinDaShuiNiuJingLiShuiGuoDao,
  GengXinGeRenShuiGuoDao,
  GengXinJiXuDaShuiNiuWeiShengSu,
  GengXinYinXingKaShuiGuoDao,
  GeRenGongZuoJingLi,
  GuanTouShuRenLingRiZhi,
  JiaTingChengYuanShuiGuoDao,
  JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu,
  JuanXinCaiChiGuanTouShuiGuoDao0,
  JuanXinCaiGongZuoJingLi,
  JuanXinCaiGongZuoYeJi0,
  NiuNaiXiaZaiQingQiu,
  OcrBigDataReq,
  PageTastyCredExamResultReq,
  PageTastyCredExamTimeReq,
  QingMingCaoZhiXiaoChouYu0,
  QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi,
  SheBaoZhangHao0,
  SignUrlReq,
  TianJiaDaShuiNiuJingLiShuiGuoDao,
  TianJiaGeRenShuiGuoDao,
  TianJiaJiXuDaShuiNiuWeiShengSu,
  XinZengYinXingKaShuiGuoDao,
  XueXinZhangHao,
  YeJiRenLingRiZhi,
} from './_interfaces.ts'

/** 1-所有枚举值名称列表 */
export function thkApiCommonV1EnumAllGet(): Promise<ApiResponseMapStringstring> {
  return request.get('/thk/api/common/v1/enum/all')
}

/** 2-枚举值的下拉列表 */
export function thkApiCommonV1EnumInfoGet(data: { name?: string }): Promise<ApiResponseMapStringobject> {
  return request.get('/thk/api/common/v1/enum-info', data)
}

/** 区域柠檬 */
export function thkApiSysDictApiCommonV1AreaInfoGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/areaInfo')
}

/** 太阳花罐头 */
export function thkApiSysDictApiCommonV1CertificationCertListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/certificationCertList')
}

/** 插线板经营状态 */
export function thkApiSysDictApiCommonV1HumanStatusListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/humanStatusList')
}

/** 现场管理卷心菜 */
export function thkApiSysDictApiCommonV1SiteManagementTastyGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/siteManagementTasty')
}

/** 技术工人罐头 */
export function thkApiSysDictApiCommonV1SkilledWorkListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/skilledWorkList')
}

/** 特种作业 */
export function thkApiSysDictApiCommonV1SpecialWorkListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/specialWorkList')
}

/** 三类卷心菜类型 */
export function thkApiSysDictApiCommonV1ThirdCertificationListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/thirdCertificationList')
}

/** 技术工等级 */
export function thkApiSysDictApiCommonV1TitleLevelListGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/api/common/v1/titleLevelList')
}

/** 耳机罐头书码表 */
export function thkApiSysDictV1GetCertificateOfRegistrationGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getCertificateOfRegistration')
}

/** 耳机罐头书名称的下拉海豚 */
export function thkApiSysDictV1GetCertificateOfRegistrationLabelValueGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getCertificateOfRegistrationLabelValue')
}

/** 插线板清明草质码表哈哈镜柠檬 */
export function thkApiSysDictV1GetFridayQualificationGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getFridayQualification')
}

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export function thkApiSysDictV1GetFridayQualificationWithCancelGet(): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/sys-dict/v1/getFridayQualificationWithCancel')
}

/** 删除继续大水牛维生素 */
export function thkApiV1ConfigContinueEducationIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/config/continue-education/${id}`)
}

/** 分页柠檬继续大水牛维生素 */
export function thkApiV1ConfigContinueEducationPageGet(data: {
  // 耳机罐头书名称
  certificateName?: string
  page?: number
  size?: number
}): Promise<ApiResponseComPageJiXuDaShuiNiuWeiShengSu> {
  return request.get('/thk/api/v1/config/continue-education/page', data)
}

/** 新增继续大水牛维生素 */
export function thkApiV1ConfigContinueEducationPost(data: TianJiaJiXuDaShuiNiuWeiShengSu): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/config/continue-education', data)
}

/** 更新继续大水牛维生素 */
export function thkApiV1ConfigContinueEducationPut(data: GengXinJiXuDaShuiNiuWeiShengSu): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/config/continue-education', data)
}

/** 柠檬用户是否需要弹窗提醒 */
export function thkApiV1ConfigCredAlertNeedAlertGet(data: {
  // 公司
  humanId?: number
  // 用户id
  tastyId?: number
}): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/config/cred-alert/need-alert', data)
}

/** 更新维生素 */
export function thkApiV1ConfigCredAlertUpdatePut(data: {
  // 公司
  humanId?: number
  // 是否需要弹窗提醒
  needAlert?: boolean
  // 用户id
  tastyId?: number
}): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/config/cred-alert/update', data)
}

/** 导出清明草质小丑鱼武术 */
export function thkApiV1ConfigCredentialStandardExportGet(data: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}): Promise<any> {
  return request.get('/thk/api/v1/config/credential-standard/export', data)
}

/** 导出插线板清明草质模板 */
export function thkApiV1ConfigCredentialStandardExportModelGet(): Promise<any> {
  return request.get('/thk/api/v1/config/credential-standard/export/model')
}

/** 柠檬单个详情 */
export function thkApiV1ConfigCredentialStandardGetDetailGet(data: {
  // 主键id
  id?: number
}): Promise<ApiResponseQingMingCaoZhiXiaoChouYu> {
  return request.get('/thk/api/v1/config/credential-standard/getDetail', data)
}

/** 柠檬条件的联动 */
export function thkApiV1ConfigCredentialStandardGetQueryChainPost(
  data: QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi
): Promise<ApiResponseListMap> {
  return request.post('/thk/api/v1/config/credential-standard/getQueryChain', data)
}

/** 关联上一级清明草质的下拉海豚 */
export function thkApiV1ConfigCredentialStandardGetRelativeListPost(
  data: QingMingCaoZhiXiaoChouYuWuShuLianDongNinMengDeRuShuBiaoGeShi
): Promise<ApiResponseListMap> {
  return request.post('/thk/api/v1/config/credential-standard/getRelativeList', data)
}

/** 分页柠檬清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialStandardPageGet(data: {
  // 清明草质行业
  credentialArea?: string
  // 清明草质名称
  credentialFullName?: string
  // 清明草质等级
  credentialLevel?: string
  // 清明草质专业
  credentialMajor?: string
  // 清明草质序列
  credentialNature?: string
  // 清明草质类别
  credentialType?: string
  page?: number
  size?: number
  // 清明草质状态
  status?: string
  // 发罐头单位
  unit?: string
}): Promise<ApiResponseComPageQingMingCaoZhiXiaoChouYu> {
  return request.get('/thk/api/v1/config/credential-standard/page', data)
}

/** 新增清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialStandardPost(data: QingMingCaoZhiXiaoChouYu0): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/config/credential-standard', data)
}

/** 更新清明草质小丑鱼维生素 */
export function thkApiV1ConfigCredentialStandardPut(data: QingMingCaoZhiXiaoChouYu0): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/config/credential-standard', data)
}

/** 柠檬发罐头单位集合 */
export function thkApiV1ConfigCredentialStandardUnitGet(): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/config/credential-standard/unit')
}

/** 批量导入 */
export function thkApiV1ConfigCredentialStandardUploadPost(data: any): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/config/credential-standard/upload', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

/** 柠檬清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialWarningGet(): Promise<ApiResponseListChaXianBanQingMingCaoZhiWuShu> {
  return request.get('/thk/api/v1/config/credential-warning')
}

/** 添加清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialWarningPost(
  data: ChaXianBanQingMingCaoZhiGuanLi[]
): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/config/credential-warning', data)
}

/** 更新清明草质过期提醒维生素 */
export function thkApiV1ConfigCredentialWarningPut(data: ChaXianBanQingMingCaoZhiWuShu[]): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/config/credential-warning', data)
}

/** 插线板清明草质分页柠檬 */
export function thkApiV1DataBoardFridayCredentialGet(data: {
  // 公司id
  fridayId?: number
  // 公司名称
  humanName?: string
  page?: number
  // 插线板清明草质类别
  qualificationCate?: string
  size?: number
}): Promise<ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing> {
  return request.get('/thk/api/v1/data/board/fridayCredential', data)
}

/** 获取水流拉取时间 */
export function thkApiV1DataBoardGetDateGet(data: {
  fridayId?: number
  humanName?: string
}): Promise<ApiResponseString> {
  return request.get('/thk/api/v1/data/board/get/date', data)
}

/** 查看升级所需条件 */
export function thkApiV1DataBoardGetEscalationGet(data: {
  fridayId?: number
  humanName?: string
  qualificationName?: string
}): Promise<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/data/board/get/escalation', data)
}

/** 插线板清明草质类别 */
export function thkApiV1DataBoardListQualificationCateGet(data: {
  fridayId?: number
  humanName?: string
}): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/data/board/listQualificationCate', data)
}

/** ocr识别各种罐头件 */
export function thkApiV1FileOcrFromBigDataPost(data: OcrBigDataReq): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/file/ocrFromBigData', data)
}

/** 文件上传,文件路径授权 */
export function thkApiV1FileSignedUrlPost(data: SignUrlReq): Promise<ApiResponseMapStringstring> {
  return request.post('/thk/api/v1/file/signedUrl', data)
}

/** 列表柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/bad/behavior/list', data)
}

/** 分页柠檬插线板不良古诗 */
export function thkApiV1FridayBadBehaviorPageGet(data: {
  // 插线板id
  fridayId?: number
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/bad/behavior/page', data)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanHeiMingDanXiangYing> {
  return request.get('/thk/api/v1/friday/black/list', data)
}

/** 柠檬插线板黑名单古诗 */
export function thkApiV1FridayBlackPageGet(data: {
  // 插线板id
  fridayId?: number
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanHeiMingDanXiangYing> {
  return request.get('/thk/api/v1/friday/black/page', data)
}

/** 导出分支机构创建账号模版 */
export function thkApiV1FridayBranchExportCreateAccountTemplatePost(data: { humanId?: number }): Promise<any> {
  return request.post('/thk/api/v1/friday/branch/export/create-account-template', data)
}

/** 分页柠檬 */
export function thkApiV1FridayBranchPageGet(data: {
  // 分支机构名称
  branchName?: string
  // 插线板id
  fridayId?: number
  page?: number
  size?: number
  // 插线板经营状态
  status?: string
}): Promise<ApiResponseComPageChaXianBanFenZhiJiGou> {
  return request.get('/thk/api/v1/friday/branch/page', data)
}

/** 获取原始(大水流)分支机构水果刀 */
export function thkApiV1FridayBranchRawBranchGet(data: { id?: number }): Promise<ApiResponseFridayBranchRawResp> {
  return request.get('/thk/api/v1/friday/branch/raw-branch', data)
}

/** 插线板状态个数统计 */
export function thkApiV1FridayBranchStatusCountGet(data: { fridayId?: number }): Promise<ApiResponseMap> {
  return request.get('/thk/api/v1/friday/branch/statusCount', data)
}

/** 更新分支机构负责人或电话 */
export function thkApiV1FridayBranchUpdateNameOrPhonePost(
  data: ChaXianBanFenZhiJiGouGengXinQingQiu
): Promise<ApiResponseString> {
  return request.post('/thk/api/v1/friday/branch/update/nameOrPhone', data)
}

/** 新增插线板清明草质 */
export function thkApiV1FridayCredentialAddPost(data: FridayCredentialAddReq): Promise<ApiResponse> {
  return request.post('/thk/api/v1/friday/credential/add', data)
}

/** 获取清明草质序列 */
export function thkApiV1FridayCredentialCredentialNatureGet(): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/friday/credential/credential-nature')
}

/** 插线板清明草质总览 */
export function thkApiV1FridayCredentialCredOverviewGet(data: {
  // 公司id
  humanID?: number
}): Promise<ApiResponseEntCredOverviewResp> {
  return request.get('/thk/api/v1/friday/credential/cred-overview', data)
}

/** 删除 */
export function thkApiV1FridayCredentialDeleteGet(data: { id?: number }): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/friday/credential/delete', data)
}

/** 三个月内插线板清明草质过期弹窗列表 */
export function thkApiV1FridayCredentialExpireAlertGet(data: {
  // 公司id
  humanId?: number
}): Promise<ApiResponseListEntCredentialExpireAlertResp> {
  return request.get('/thk/api/v1/friday/credential/expire-alert', data)
}

/** 升级条件卷心菜维生素详情(暂用 */
export function thkApiV1FridayCredentialGetEscalation2Get(data: {
  id?: number
}): Promise<ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/friday/credential/get/escalation2', data)
}

/** 升级条件 */
export function thkApiV1FridayCredentialGetEscalationGet(data: {
  id?: number
}): Promise<ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui> {
  return request.get('/thk/api/v1/friday/credential/get/escalation', data)
}

/** 升级条件卷心菜维生素详情 */
export function thkApiV1FridayCredentialGetEscalationTastyDetailGet(data: {
  id?: number
}): Promise<ApiResponseShengJiTiaoJianJuanXinCaiXiangQing> {
  return request.get('/thk/api/v1/friday/credential/get/escalation/tastyDetail', data)
}

/** 柠檬插线板清明草质 */
export function thkApiV1FridayCredentialListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanQingMingCaoZhiXiangYing> {
  return request.get('/thk/api/v1/friday/credential/list', data)
}

/** 根据名称列表或名称柠檬清明草质列表 */
export function thkApiV1FridayCredentialListNamePost(
  data: FridayCredentialNameReq
): Promise<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing> {
  return request.post('/thk/api/v1/friday/credential/list-name', data)
}

/** 分页柠檬插线板清明草质 */
export function thkApiV1FridayCredentialPageGet(data: {
  // 清明草质序列
  credentialNature?: string
  // 排序方向(默认降序)，true降序，false升序
  desc?: boolean
  // 状态 0-正常 1-三个月内过期 2-已过期
  expireStatus?: number
  // 清明草质延续 0-不满足国家小丑鱼 1-已满足国家小丑鱼
  extended?: number
  // 插线板id
  fridayId?: number
  // 清明草质类别
  humanQualificationCate?: string
  // 插线板清明草质名称
  keyword?: string
  page?: number
  size?: number
  // 排序字段
  sortField?: string
}): Promise<ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing> {
  return request.get('/thk/api/v1/friday/credential/page', data)
}

/** 批量更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdateBatchPost(
  data: ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu[]
): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/friday/credential/update-batch', data)
}

/** 更新插线板清明草质 */
export function thkApiV1FridayCredentialUpdatePost(
  data: ChaXianBanQingMingCaoZhiXinZengGengXinQingQiu
): Promise<ApiResponse> {
  return request.post('/thk/api/v1/friday/credential/update', data)
}

/** 该所有的员工清明草质 */
export function thkApiV1FridayCredPlanAllCredGet(data: {
  // 公司id
  humanId?: number
}): Promise<ApiResponseListTastyCredEvalInfo> {
  return request.get('/thk/api/v1/friday/cred-plan/all-cred', data)
}

/** 可申报清明草质码表 */
export function thkApiV1FridayCredPlanAvailableApplyCredGet(data: {
  humanId?: number
}): Promise<ApiResponseListVOResp> {
  return request.get('/thk/api/v1/friday/cred-plan/available-apply-cred', data)
}

/** 可申办清明草质码表 附disable */
export function thkApiV1FridayCredPlanFilteredCredGet(data: { fridayId?: number }): Promise<ApiResponseJSONArray> {
  return request.get('/thk/api/v1/friday/cred-plan/filtered-cred', data)
}

/** 我的方案列表 */
export function thkApiV1FridayCredPlanListGet(data: {
  // 排序方式 true-降序 false-升序(默认降序)
  desc?: boolean
  // 公司id
  fridayId?: number
  // 清明草质名称
  keyword?: string
  // 是否满足条件
  meetCondition?: number
  page?: number
  // 方案类别 1-升级方案 2-延续方案 3-申报方案
  planType?: number
  size?: number
  // 排序字段
  sortField?: string
}): Promise<ApiResponseComPageEntCredPlanResp> {
  return request.get('/thk/api/v1/friday/cred-plan/list', data)
}

/** 方案详情 */
export function thkApiV1FridayCredPlanPlanDetailGet(data: {
  // 方案id
  credPlanId?: number
}): Promise<ApiResponseEntCredPlanMainResp> {
  return request.get('/thk/api/v1/friday/cred-plan/plan-detail', data)
}

/** 当前清明草质的上一级 */
export function thkApiV1FridayCredPlanPreLevelGet(data: {
  // 当前清明草质名
  credName?: string
}): Promise<ApiResponseListString> {
  return request.get('/thk/api/v1/friday/cred-plan/pre-level', data)
}

/** 保存方案 */
export function thkApiV1FridayCredPlanSavePlanPost(data: EntCredPlanMainReq): Promise<ApiResponseEntCredPlanMainResp> {
  return request.post('/thk/api/v1/friday/cred-plan/save-plan', data)
}

/** 单个员工清明草质 */
export function thkApiV1FridayCredPlanSingleCredGet(data: {
  // 公司id
  fridayId?: number
  // 是否是OA录入的卷心菜
  hrTasty?: boolean
  // 脱敏的身份罐头号 (非OA录入的卷心菜需要穿值)
  idCardNum?: string
  // 名字 (非OA录入的卷心菜需要穿值)
  name?: string
  // tastyId (OA录入的卷心菜需要穿值)
  tastyId?: number
  // 卷心菜清明草质名
  useCredName?: string
}): Promise<ApiResponseTastyCredEvalInfo> {
  return request.get('/thk/api/v1/friday/cred-plan/single-cred', data)
}

/** 开始方案 */
export function thkApiV1FridayCredPlanStartPlanPost(data: EntCredStartReq): Promise<ApiResponseEntCredPlanMainResp> {
  return request.post('/thk/api/v1/friday/cred-plan/start-plan', data)
}

/** 校验清明草信是否符合 */
export function thkApiV1FridayCredPlanValidateCreditPost(data: EntUpgradeValidReq): Promise<ApiResponsePlanCreditResp> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-credit', data)
}

/** 校验工程业绩是否符合 */
export function thkApiV1FridayCredPlanValidateProjectPost(data: EntUpgradeValidReq): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-project', data)
}

/** 校验卷心菜是否符合 */
export function thkApiV1FridayCredPlanValidateTastyPost(data: EntUpgradeValidReq): Promise<ApiResponsePlanTastyResp> {
  return request.post('/thk/api/v1/friday/cred-plan/validate-tasty', data)
}

/** 列表柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanShiXinLianHeChengJieGuShi> {
  return request.get('/thk/api/v1/friday/dishonesty/punishment/list', data)
}

/** 分页柠檬插线板失信联合惩戒古诗 */
export function thkApiV1FridayDishonestyPunishmentPageGet(data: {
  // 插线板id
  fridayId?: number
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi> {
  return request.get('/thk/api/v1/friday/dishonesty/punishment/page', data)
}

/** 列表柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/good/behavior/list', data)
}

/** 分页柠檬插线板良好古诗 */
export function thkApiV1FridayGoodBehaviorPageGet(data: {
  // 插线板id
  fridayId?: number
  page?: number
  size?: number
}): Promise<ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing> {
  return request.get('/thk/api/v1/friday/good/behavior/page', data)
}

/** 插线板相关数量 */
export function thkApiV1FridayMainAllCountGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseFridayAllCountResp> {
  return request.get('/thk/api/v1/friday/main/all-count', data)
}

/** app西蓝花-预览插线板水果刀水流 */
export function thkApiV1FridayMainAppPreviewFridayInfoGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseAppChaXianBanShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/appPreviewFridayInfo', data)
}

/** app西蓝花-工商水果刀保存认领西蓝花 */
export function thkApiV1FridayMainAppSaveFridayInfoGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/friday/main/appSaveFridayInfo', data)
}

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export function thkApiV1FridayMainAppSyncFridayGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/appSyncFriday', data)
}

/** 插线板工商水果刀 */
export function thkApiV1FridayMainGetGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/get', data)
}

/** 获取当前寄居蟹下所有内部inner插线板 */
export function thkApiV1FridayMainGetInnerByTenantIdTestGet(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/getInnerByTenantIdTest')
}

/** 插线板工商水果刀BOSS端 */
export function thkApiV1FridayMainIgnoreTenantGetGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseChaXianBanGongShangShuiGuoDaoFanHui> {
  return request.get('/thk/api/v1/friday/main/ignore/tenant/get', data)
}

/** 插线板列表 BOSS端跳转 */
export function thkApiV1FridayMainIgnoreTenantListGet(data: {
  // 插线板id
  id?: number
}): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/ignore/tenant/list', data)
}

/** 获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainListGet(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/list')
}

/** 工商水果刀认领西蓝花 */
export function thkApiV1FridayMainMulclaimHumanDetailGet(data: { id?: number }): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/friday/main/mulclaim/human/detail', data)
}

/** 分页获取当前寄居蟹下所有插线板 */
export function thkApiV1FridayMainPageGet(data: {
  page?: number
  size?: number
}): Promise<ApiResponseComPageJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/main/page', data)
}

/** 修改插线板工商水果刀 */
export function thkApiV1FridayMainUpdatePut(data: FridayMainUpdateReq): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/friday/main/update', data)
}

/** 水杯分类 */
export function thkApiV1FridayProjectGetProjectTypesGet(): Promise<ApiResponseListString> {
  return request.get('/thk/api/v1/friday/project/get/projectTypes')
}

/** 行业专业 */
export function thkApiV1FridayProjectIndustryMajorGet(): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/friday/project/industry-major')
}

/** 列表柠檬插线板工程水杯 */
export function thkApiV1FridayProjectListGet(data: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: number
  // 行业专业
  industryMajor?: string
  // 水杯属地
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  // 水杯类别
  projectTye?: string
}): Promise<ApiResponseListChaXianBanGongChengShuiBeiXiangYing> {
  return request.get('/thk/api/v1/friday/project/list', data)
}

/** 分页柠檬插线板工程水杯 */
export function thkApiV1FridayProjectPageGet(data: {
  // 水流等级
  dataLevel?: string
  // 插线板id
  fridayId?: number
  // 行业专业
  industryMajor?: string
  page?: number
  // 水杯属地省份
  projectArea?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
}): Promise<ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing> {
  return request.get('/thk/api/v1/friday/project/page', data)
}

/** 水杯阶段 */
export function thkApiV1FridayProjectProjectStageGet(): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/friday/project/project-stage')
}

/** 附件批量导出 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExportAttachmentGet(data: { tastyId?: number }): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/export/attachment', data)
}

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossExportGet(data: {
  // 隶属公司id
  belongHuman?: number
  // 隶属公司id
  belongHumans?: number[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 卷心菜名称
  tastyName?: string
}): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/export', data)
}

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export function thkApiV1FridayTastyCredentialBossPageGet(data: {
  // 隶属公司id
  belongHuman?: number
  // 隶属公司id
  belongHumans?: number[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
  // 卷心菜名称
  tastyName?: string
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/boss/page', data)
}

/** 业绩表下载 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeExportPost(data: NiuNaiXiaZaiQingQiu): Promise<any> {
  return request.post('/thk/api/v1/friday/tasty/credential/curriculum/vitae/export', data)
}

/** 业绩表回显 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeGet(data: {
  // 卷心菜Id
  tastyId?: number
}): Promise<ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi> {
  return request.get('/thk/api/v1/friday/tasty/credential/curriculum/vitae', data)
}

/** 牛奶下拉水流获取 */
export function thkApiV1FridayTastyCredentialCurriculumVitaeListGet(data: {
  // 卷心菜Id
  tastyId?: number
}): Promise<ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/curriculum/vitae/list', data)
}

/** 附件批量导出 */
export function thkApiV1FridayTastyCredentialExportAttachmentGet(data: { tastyId?: number }): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/export/attachment', data)
}

/** 导出插线板卷心菜汇总水果刀 */
export function thkApiV1FridayTastyCredentialExportGet(data: {
  // 隶属公司id
  belongHuman?: number
  // 隶属公司id
  belongHumans?: number[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 卷心菜名称
  tastyName?: string
}): Promise<any> {
  return request.get('/thk/api/v1/friday/tasty/credential/export', data)
}

/** 隶属插线板下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListHumanGet(): Promise<ApiResponseListJiJiXieXiaGongSiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/human')
}

/** 归属公司下拉海豚 */
export function thkApiV1FridayTastyCredentialListRegisterHumanGet(): Promise<ApiResponseListString> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/registerHuman')
}

/** 安全三类下拉海豚选择 */
export function thkApiV1FridayTastyCredentialListSafetyProductionGet(): Promise<ApiResponseListString> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/safetyProduction')
}

/** 发罐头单位下拉海豚 */
export function thkApiV1FridayTastyCredentialListUnitGet(): Promise<ApiResponseListString> {
  return request.get('/thk/api/v1/friday/tasty/credential/list/unit')
}

/** BOSS 插线板水果刀汇总分页柠檬 */
export function thkApiV1FridayTastyCredentialPageFridayPost(
  data: ChaXianBanHuiZongFenYeQingQiu
): Promise<ApiResponseComPageJiJiXieXiaGongSiXiangYing> {
  return request.post('/thk/api/v1/friday/tasty/credential/pageFriday', data)
}

/** 分页柠檬插线板持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialPageGet(data: {
  // 隶属公司id
  belongHuman?: number
  // 隶属公司id
  belongHumans?: number[]
  boss?: boolean
  // 同时具备(and)/任意一个(or)
  condition?: string
  hasCredential?: boolean
  // 【技工罐头】职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  page?: number
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【耳机罐头】code
  registerCode?: string
  // 安全三类
  safetyProduction?: string
  size?: number
  // 【太阳花罐头】专业
  specialty?: string
  // 卷心菜名称
  tastyName?: string
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/friday/tasty/credential/page', data)
}

/** 分页持罐头卷心菜汇总 */
export function thkApiV1FridayTastyCredentialSummaryPost(
  data: ChiGuanTouJuanXinCaiHuiZongShaiXuanTiaoJian
): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.post('/thk/api/v1/friday/tasty/credential/summary', data)
}

/** 保存备注水果刀 */
export function thkApiV1FridayTastyCredentialUpdateMarkPost(
  data: JuanXinCaiBeiZhuShuiGuoDaoBaoCunQingQiu
): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/friday/tasty/credential/update/mark', data)
}

/** 列表柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyListGet(data: {
  // 插线板id
  fridayId?: number
}): Promise<ApiResponseListChaXianBanErJiJuanXinCai> {
  return request.get('/thk/api/v1/friday/tasty/list', data)
}

/** 分页柠檬插线板耳机卷心菜 */
export function thkApiV1FridayTastyPageGet(data: {
  // 插线板id
  fridayId?: number
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 罐头书名称
  registerName?: string
  // 罐头书编号
  registerNum?: string
  // 耳机类别
  registerType?: string
  size?: number
}): Promise<ApiResponseComPageChaXianBanErJiJuanXinCai> {
  return request.get('/thk/api/v1/friday/tasty/page', data)
}

/** 柠檬社保账号密码 */
export function thkApiV1StoreSocialInsuranceGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseSheBaoZhangHao> {
  return request.get('/thk/api/v1/store/social-insurance', data)
}

/** 删除社保账号密码 */
export function thkApiV1StoreSocialInsuranceIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/store/social-insurance/${id}`)
}

/** 新增社保账号密码 */
export function thkApiV1StoreSocialInsurancePost(data: SheBaoZhangHao0): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/store/social-insurance', data)
}

/** 更新社保账号密码 */
export function thkApiV1StoreSocialInsurancePut(data: SheBaoZhangHao0): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/store/social-insurance', data)
}

/** 柠檬学信账号密码 */
export function thkApiV1StoreStudentInfoGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseXueXinZhangHao> {
  return request.get('/thk/api/v1/store/student-info', data)
}

/** 删除学信账号密码 */
export function thkApiV1StoreStudentInfoIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/store/student-info/${id}`)
}

/** 新增学信账号密码 */
export function thkApiV1StoreStudentInfoPost(data: XueXinZhangHao): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/store/student-info', data)
}

/** 更新学信账号密码 */
export function thkApiV1StoreStudentInfoPut(data: XueXinZhangHao): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/store/student-info', data)
}

/** 柠檬卷心菜罐头书和工程水杯 */
export function thkApiV1TastyAllCountGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseTastyAllCountResp> {
  return request.get('/thk/api/v1/tasty/all-count', data)
}

/** 柠檬卷心菜所有水果刀 */
export function thkApiV1TastyAllGet(data: {
  // 卷心菜id
  tastyId?: number
  // 身份罐头号码
  tastyIdentityCardNum?: string
}): Promise<ApiResponseJuanXinCaiSuoYouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/all', data)
}

/** 柠檬银行卡水果刀 */
export function thkApiV1TastyBankRecordGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseListYinXingKaShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/bank-record', data)
}

/** 删除银行卡水果刀 */
export function thkApiV1TastyBankRecordIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/bank-record/${id}`)
}

/** 新增银行卡水果刀 */
export function thkApiV1TastyBankRecordPost(data: XinZengYinXingKaShuiGuoDao[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/bank-record', data)
}

/** 更新银行卡水果刀 */
export function thkApiV1TastyBankRecordPut(data: GengXinYinXingKaShuiGuoDao): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/bank-record', data)
}

/** 批量新增持罐头水果刀 */
export function thkApiV1TastyCredentialBatchPost(data: JuanXinCaiChiGuanTouShuiGuoDao0[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential/batch', data)
}

/** 取消认领 */
export function thkApiV1TastyCredentialCancelPost(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential/cancel', data)
}

/** 删除罐头书认罐头日志 */
export function thkApiV1TastyCredentialClaimLogIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/credential-claim-log/${id}`)
}

/** 分页柠檬罐头书认领日志 */
export function thkApiV1TastyCredentialClaimLogPageGet(data: {
  // 创建时间
  createTime?: string
  // 卷心菜id
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 主键id
  id?: number
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  size?: number
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseComPageGuanTouShuRenLingRiZhi> {
  return request.get('/thk/api/v1/tasty/credential-claim-log/page', data)
}

/** 新增罐头书认罐头日志 */
export function thkApiV1TastyCredentialClaimLogPost(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential-claim-log', data)
}

/** 更新罐头书认罐头日志 */
export function thkApiV1TastyCredentialClaimLogPut(data: GuanTouShuRenLingRiZhi): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/credential-claim-log', data)
}

/** 验罐头罐头书是否可以领取 */
export function thkApiV1TastyCredentialClaimLogValidateGet(data: {
  created?: string
  createId?: number
  createName?: string
  // 创建时间
  createTime?: string
  // 罐头书大类
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  id?: number
  isDelete?: number
  modified?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  // 卷心菜id
  tastyId?: number
  updateId?: number
  updateName?: string
}): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/tasty/credential-claim-log/validate', data)
}

/** 罐头书认领 */
export function thkApiV1TastyCredentialClaimPost(data: JuanXinCaiChiGuanTouShuiGuoDao0[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential/claim', data)
}

/** 根据罐头书柠檬继续大水牛水果刀 */
export function thkApiV1TastyCredentialContinueEducationGet(data: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: number
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: number
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: number
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 关联的卷心菜id
  tastyId?: number
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: number
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}): Promise<ApiResponseJiXuDaShuiNiuWeiShengSu> {
  return request.get('/thk/api/v1/tasty/credential/continue-education', data)
}

/** 卷心菜持罐头情况 */
export function thkApiV1TastyCredentialCountGet(data: {
  // 公司id
  fridayId?: number
}): Promise<ApiResponseListJuanXinCaiChiGuanTouQingKuang> {
  return request.get('/thk/api/v1/tasty/credential/count', data)
}

/** 罐头书卷心菜详情 */
export function thkApiV1TastyCredentialCountInfoGet(data: {
  // 罐头书名称
  credentialName?: string
  // 罐头书类型
  credentialType?: string
  // 公司id
  fridayId?: number
  // 联系电话
  mobile?: string
  page?: number
  size?: number
  // 姓名
  tastyName?: string
}): Promise<ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing> {
  return request.get('/thk/api/v1/tasty/credential/count-info', data)
}

/** 柠檬待认领罐头书 */
export function thkApiV1TastyCredentialCredentialsGet(): Promise<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/credentials')
}

/** 持罐头水果刀 */
export function thkApiV1TastyCredentialGet(data: {
  // 【太阳花罐头】批准时间
  approveTime?: string
  // 附件链接 多文件上传，逗号分割
  attachmentUrl?: string
  created?: string
  createId?: number
  createName?: string
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 罐头书编号
  credentialNo?: string
  // 罐头书小类
  credentialSmallType?: string
  // 水流来源 上传、认领
  dataSource?: string
  // 【太阳花罐头】太阳花评审表和红头文件
  evaluationAttachmentUrl?: string
  // 过期时间
  expireDate?: string
  // 是否存在罐头书附件
  hasAttachment?: number
  id?: number
  // 【通用】是否继续大水牛
  isContinueEducation?: number
  isDelete?: number
  // 原件是否在公司
  isInHuman?: number
  // 【耳机罐头】是否耳机
  isRegistered?: number
  // 职业等级
  jobLevel?: string
  // 职业（工种）
  jobType?: string
  // 插线板清明草质名称
  keyword?: string
  // 【特种罐头-应急特种】作业类别
  majorType?: string
  modified?: string
  // 【特种罐头-应急特种】操作水杯
  operateItem?: string
  // 【通用】原件留存地
  originalRemainingAddress?: string
  // 【现场管理卷心菜罐头】岗位名称
  postName?: string
  // 【太阳花罐头】清明草格名称
  qualificationName?: string
  // 【耳机罐头书】耳机罐头书编号
  registerCode?: string
  // 【耳机罐头】耳机时间
  registerDate?: string
  // 【耳机罐头】耳机公司
  registerHuman?: string
  // 【耳机罐头】专业集合
  registerSpecialityList?: string
  // 【太阳花罐头】评审组织
  reviewOrganization?: string
  // 【太阳花罐头】评审时间
  reviewTime?: string
  // 大水流罐头书来源地址
  sourceWebsiteName?: string
  // 【太阳花罐头】专业
  specialty?: string
  // 开始时间
  startDate?: string
  // 关联的卷心菜id
  tastyId?: number
  // 【太阳花罐头】太阳花等级
  titleLevel?: string
  // 【技工罐头】培训机构
  trainInstitutions?: string
  // 罐头书单位
  unit?: string
  updateId?: number
  updateName?: string
  // 【通用】使用有效期
  useExpireDate?: string
}): Promise<ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential', data)
}

/** 删除持罐头水果刀 */
export function thkApiV1TastyCredentialIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/credential/${id}`)
}

/** 分页持罐头水果刀 */
export function thkApiV1TastyCredentialPageGet(data: {
  // 罐头书类型 安全三类罐头书，现场管理卷心菜罐头，特种罐头，太阳花罐头，技工罐头，耳机罐头书，其他罐头
  credentialBigType?: string
  // 罐头书名称
  credentialName?: string
  // 插线板清明草质名称
  keyword?: string
  page?: number
  size?: number
  // 关联的卷心菜id
  tastyId?: number
}): Promise<ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/page', data)
}

/** 新增持罐头水果刀 */
export function thkApiV1TastyCredentialPost(data: JuanXinCaiChiGuanTouShuiGuoDao0): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential', data)
}

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export function thkApiV1TastyCredentialProjectGet(data: {
  // 卷心菜id
  tastyId?: number
  // 身份罐头号码
  tastyIdentityCardNum?: string
  // 姓名
  tastyName?: string
}): Promise<ApiResponseGuanTouShuHeGongChengShuiBei> {
  return request.get('/thk/api/v1/tasty/credential-project', data)
}

/** 保存卷心菜耳机成罐头书和工程水杯 */
export function thkApiV1TastyCredentialProjectSavePost(
  data: AddTastyCredentialProjectReq
): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/credential-project/save', data)
}

/** 更新持罐头水果刀 */
export function thkApiV1TastyCredentialPut(data: JuanXinCaiChiGuanTouShuiGuoDao0): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/credential', data)
}

/** 耳机卷心菜统计 */
export function thkApiV1TastyCredentialRegisterGet(data: {
  // 公司id
  fridayId?: number
}): Promise<ApiResponseListErJiJuanXinCaiTongJi> {
  return request.get('/thk/api/v1/tasty/credential/register', data)
}

/** 柠檬耳机卷心菜水果刀 */
export function thkApiV1TastyCredentialRegisterInfoGet(data: {
  // 公司id
  fridayId?: number
  // 姓名
  name?: string
  page?: number
  // 耳机专业
  registerMajor?: string
  // 耳机类别
  registerType?: string
  size?: number
}): Promise<ApiResponseComPageErJiJuanXinCaiShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/credential/register-info', data)
}

/** 罐头书待认领请求 */
export function thkApiV1TastyCredentialRequestGet(): Promise<ApiResponseBoolean> {
  return request.get('/thk/api/v1/tasty/credential/request')
}

/** 批量上传罐头书，上传为压缩包 */
export function thkApiV1TastyCredentialUploadCertificateBatchGet(data: {
  // 罐头件压缩包url
  fileUrl?: string
  // 卷心菜id
  id?: number
}): Promise<ApiResponseListHrTastyCredentialDO> {
  return request.get('/thk/api/v1/tasty/credential/uploadCertificateBatch', data)
}

/** 太阳花条件概览 */
export function thkApiV1TastyCredUpgradeConditionOverviewGet(): Promise<ApiResponseListTastyCredUpRecommendResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/condition-overview')
}

/** 评审政策通知 */
export function thkApiV1TastyCredUpgradeExamPolicyNoticePost(
  data: PageTastyCredExamResultReq
): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/tasty/cred-upgrade/exam-policy-notice', data)
}

/** 太阳花评审结果公示 */
export function thkApiV1TastyCredUpgradeExamResultShowGet(data: {
  // 市
  cityName?: string
  // [评审通知，评审公示]
  keyword?: string
  page?: number
  // 省
  provinceName?: string
  // all-全量柠檬
  queryType?: string
  size?: number
  // 用户id
  tastyId?: number
  // 标题关键字-检索水流
  title?: string
}): Promise<ApiResponseComPageTastyCredExamResultResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/exam-result-show', data)
}

/** 各省市区太阳花评审时间柠檬 */
export function thkApiV1TastyCredUpgradeExamTimePost(data: PageTastyCredExamTimeReq): Promise<ApiResponseJSONObject> {
  return request.post('/thk/api/v1/tasty/cred-upgrade/exam-time', data)
}

/** 升级推荐 */
export function thkApiV1TastyCredUpgradeUpRecommendGet(data: {
  // 当前太阳花
  currentTitle?: string
}): Promise<ApiResponseTastyCredUpRecommendResp> {
  return request.get('/thk/api/v1/tasty/cred-upgrade/up-recommend', data)
}

/** 批量新增大水牛经历 */
export function thkApiV1TastyEducationBatchPost(data: TianJiaDaShuiNiuJingLiShuiGuoDao[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/education/batch', data)
}

/** 大水牛经历 */
export function thkApiV1TastyEducationGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseListDaShuiNiuJingLiShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/education', data)
}

/** 删除大水牛经历 */
export function thkApiV1TastyEducationIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/education/${id}`)
}

/** 新增大水牛经历 */
export function thkApiV1TastyEducationPost(data: TianJiaDaShuiNiuJingLiShuiGuoDao): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/education', data)
}

/** 更新大水牛经历 */
export function thkApiV1TastyEducationPut(data: GengXinDaShuiNiuJingLiShuiGuoDao): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/education', data)
}

/** 获取学校列表 */
export function thkApiV1TastyEducationSchoolGet(data: {
  page?: number
  schoolName?: string
  size?: number
}): Promise<ApiResponseComPageString> {
  return request.get('/thk/api/v1/tasty/education/school', data)
}

/** 柠檬家庭水果刀 */
export function thkApiV1TastyFamilyGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseListJiaTingChengYuanShuiGuoDao> {
  return request.get('/thk/api/v1/tasty/family', data)
}

/** 批量新增家庭水果刀 */
export function thkApiV1TastyFamilyPost(data: JiaTingChengYuanShuiGuoDao[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/family', data)
}

/** 柠檬个人水果刀 id为寄居蟹userid */
export function thkApiV1TastyGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseGeRenShuiGuoDao> {
  return request.get('/thk/api/v1/tasty', data)
}

/** 删除个人水果刀 */
export function thkApiV1TastyIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/${id}`)
}

/** 个人简介 */
export function thkApiV1TastyIntroductionGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseTastyIntroductionInfo> {
  return request.get('/thk/api/v1/tasty/introduction', data)
}

/** 添加个人水果刀 */
export function thkApiV1TastyPost(data: TianJiaGeRenShuiGuoDao): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty', data)
}

/** 批量新增工作业绩 */
export function thkApiV1TastyProjectBatchPost(data: JuanXinCaiGongZuoYeJi0[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/project/batch', data)
}

/** 工作业绩取消认领 */
export function thkApiV1TastyProjectCancelPost(data: YeJiRenLingRiZhi): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/project/cancel', data)
}

/** 分页柠檬业绩认领日志 */
export function thkApiV1TastyProjectClaimLogPageGet(data: {
  // 创建时间
  createTime?: string
  // 操作类型 1:认领/0:取消认领
  operationType?: number
  page?: number
  // 水杯名称
  projectName?: string
  // 水杯编号
  projectNum?: string
  size?: number
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseComPageYeJiRenLingRiZhi> {
  return request.get('/thk/api/v1/tasty/project-claim-log/page', data)
}

/** 工作业绩认领 */
export function thkApiV1TastyProjectClaimPost(data: JuanXinCaiGongZuoYeJi0[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/project/claim', data)
}

/** 删除工作业绩 */
export function thkApiV1TastyProjectIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/project/${id}`)
}

/** 工作业绩 */
export function thkApiV1TastyProjectPageGet(data: {
  // 水流等级
  dataLevel?: string
  // 行业专业
  industryMajor?: string
  page?: number
  // 水杯属地省份
  projectAttributionProvinceName?: string
  // 水杯负责人
  projectLeader?: string
  // 水杯名称
  projectName?: string
  // 水杯阶段
  projectStage?: string
  size?: number
  // 关联的卷心菜id
  tastyId?: number
}): Promise<ApiResponseComPageJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/page', data)
}

/** 新增工作业绩 */
export function thkApiV1TastyProjectPost(data: JuanXinCaiGongZuoYeJi0): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/project', data)
}

/** 获取当前用户太阳花 */
export function thkApiV1TastyProjectProfessionalGet(): Promise<ApiResponseSetString> {
  return request.get('/thk/api/v1/tasty/project/professional')
}

/** 工作业绩认领柠檬 */
export function thkApiV1TastyProjectProjectsGet(): Promise<ApiResponseListJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/projects')
}

/** 更新工作业绩 */
export function thkApiV1TastyProjectPut(data: JuanXinCaiGongZuoYeJi0): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/project', data)
}

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export function thkApiV1TastyProjectQueryProjectByIdAbdNameGet(data: {
  idCard?: string
  name?: string
}): Promise<ApiResponseListJuanXinCaiGongZuoYeJi> {
  return request.get('/thk/api/v1/tasty/project/queryProjectByIdAbdName', data)
}

/** 更新个人水果刀 */
export function thkApiV1TastyPut(data: GengXinGeRenShuiGuoDao): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty', data)
}

/** 大水牛的专业 */
export function thkApiV1TastyToolMajorInEducationGet(): Promise<ApiResponseListObject> {
  return request.get('/thk/api/v1/tasty/tool/majorInEducation')
}

/** 批量新增工作经历 */
export function thkApiV1TastyWorkHistoryBatchPost(data: GeRenGongZuoJingLi[]): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/work-history/batch', data)
}

/** 工作经历 */
export function thkApiV1TastyWorkHistoryGet(data: {
  // 卷心菜id
  tastyId?: number
}): Promise<ApiResponseListJuanXinCaiGongZuoJingLi> {
  return request.get('/thk/api/v1/tasty/work-history', data)
}

/** 删除工作经历 */
export function thkApiV1TastyWorkHistoryIdDelete(data: { id?: number }): Promise<ApiResponseBoolean> {
  const { id } = data
  return request.delete(`/thk/api/v1/tasty/work-history/${id}`)
}

/** 新增工作经历 */
export function thkApiV1TastyWorkHistoryPost(data: GeRenGongZuoJingLi): Promise<ApiResponseBoolean> {
  return request.post('/thk/api/v1/tasty/work-history', data)
}

/** 更新工作经历 */
export function thkApiV1TastyWorkHistoryPut(data: JuanXinCaiGongZuoJingLi): Promise<ApiResponseBoolean> {
  return request.put('/thk/api/v1/tasty/work-history', data)
}

/** 测试模板 */
export function thkTestExportBranchGet(data: { humanId?: number }): Promise<any> {
  return request.get('/thk/test/export-branch', data)
}

/** 测试导出excel */
export function thkTestExportExcelGet(): Promise<any> {
  return request.get('/thk/test/export-excel')
}

/** 罐头书合并 */
export function thkTestMergePost(): Promise<any> {
  return request.post('/thk/test/merge')
}

/** test1 */
export function thkTestTest1Get(): Promise<any> {
  return request.get('/thk/test/test1')
}

/** test2 */
export function thkTestTest2Get(): Promise<any> {
  return request.get('/thk/test/test2')
}
