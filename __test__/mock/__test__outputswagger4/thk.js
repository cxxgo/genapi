import Mock from 'better-mock'
import {
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
} from './_interfaces'

/** 1-所有枚举值名称列表 */
export const thkApiCommonV1EnumAllGet = () => Mock.mock(ApiResponseMapStringstring())

/** 2-枚举值的下拉列表 */
export const thkApiCommonV1EnumInfoGet = () => Mock.mock(ApiResponseMapStringobject())

/** 区域柠檬 */
export const thkApiSysDictApiCommonV1AreaInfoGet = () => Mock.mock(ApiResponseJSONArray())

/** 太阳花罐头 */
export const thkApiSysDictApiCommonV1CertificationCertListGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板经营状态 */
export const thkApiSysDictApiCommonV1HumanStatusListGet = () => Mock.mock(ApiResponseJSONArray())

/** 现场管理卷心菜 */
export const thkApiSysDictApiCommonV1SiteManagementTastyGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工人罐头 */
export const thkApiSysDictApiCommonV1SkilledWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 特种作业 */
export const thkApiSysDictApiCommonV1SpecialWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 三类卷心菜类型 */
export const thkApiSysDictApiCommonV1ThirdCertificationListGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工等级 */
export const thkApiSysDictApiCommonV1TitleLevelListGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书码表 */
export const thkApiSysDictV1GetCertificateOfRegistrationGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书名称的下拉海豚 */
export const thkApiSysDictV1GetCertificateOfRegistrationLabelValueGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬 */
export const thkApiSysDictV1GetFridayQualificationGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export const thkApiSysDictV1GetFridayQualificationWithCancelGet = () => Mock.mock(ApiResponseJSONArray())

/** 删除继续大水牛维生素 */
export const thkApiV1ConfigContinueEducationIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬继续大水牛维生素 */
export const thkApiV1ConfigContinueEducationPageGet = () => Mock.mock(ApiResponseComPageJiXuDaShuiNiuWeiShengSu())

/** 新增继续大水牛维生素 */
export const thkApiV1ConfigContinueEducationPost = () => Mock.mock(ApiResponseBoolean())

/** 更新继续大水牛维生素 */
export const thkApiV1ConfigContinueEducationPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬用户是否需要弹窗提醒 */
export const thkApiV1ConfigCredAlertNeedAlertGet = () => Mock.mock(ApiResponseBoolean())

/** 更新维生素 */
export const thkApiV1ConfigCredAlertUpdatePut = () => Mock.mock(ApiResponseBoolean())

/** 导出清明草质小丑鱼武术 */
export const thkApiV1ConfigCredentialStandardExportGet = () => Mock.mock('')

/** 导出插线板清明草质模板 */
export const thkApiV1ConfigCredentialStandardExportModelGet = () => Mock.mock('')

/** 柠檬单个详情 */
export const thkApiV1ConfigCredentialStandardGetDetailGet = () => Mock.mock(ApiResponseQingMingCaoZhiXiaoChouYu())

/** 柠檬条件的联动 */
export const thkApiV1ConfigCredentialStandardGetQueryChainPost = () => Mock.mock(ApiResponseListMap())

/** 关联上一级清明草质的下拉海豚 */
export const thkApiV1ConfigCredentialStandardGetRelativeListPost = () => Mock.mock(ApiResponseListMap())

/** 分页柠檬清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialStandardPageGet = () => Mock.mock(ApiResponseComPageQingMingCaoZhiXiaoChouYu())

/** 新增清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialStandardPost = () => Mock.mock(ApiResponseBoolean())

/** 更新清明草质小丑鱼维生素 */
export const thkApiV1ConfigCredentialStandardPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬发罐头单位集合 */
export const thkApiV1ConfigCredentialStandardUnitGet = () => Mock.mock(ApiResponseSetString())

/** 批量导入 */
export const thkApiV1ConfigCredentialStandardUploadPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialWarningGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiWuShu())

/** 添加清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialWarningPost = () => Mock.mock(ApiResponseBoolean())

/** 更新清明草质过期提醒维生素 */
export const thkApiV1ConfigCredentialWarningPut = () => Mock.mock(ApiResponseBoolean())

/** 插线板清明草质分页柠檬 */
export const thkApiV1DataBoardFridayCredentialGet = () =>
  Mock.mock(ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing())

/** 获取水流拉取时间 */
export const thkApiV1DataBoardGetDateGet = () => Mock.mock(ApiResponseString())

/** 查看升级所需条件 */
export const thkApiV1DataBoardGetEscalationGet = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 插线板清明草质类别 */
export const thkApiV1DataBoardListQualificationCateGet = () => Mock.mock(ApiResponseSetString())

/** ocr识别各种罐头件 */
export const thkApiV1FileOcrFromBigDataPost = () => Mock.mock(ApiResponseJSONObject())

/** 文件上传,文件路径授权 */
export const thkApiV1FileSignedUrlPost = () => Mock.mock(ApiResponseMapStringstring())

/** 列表柠檬插线板不良古诗 */
export const thkApiV1FridayBadBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 分页柠檬插线板不良古诗 */
export const thkApiV1FridayBadBehaviorPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 柠檬插线板黑名单古诗 */
export const thkApiV1FridayBlackListGet = () => Mock.mock(ApiResponseListChaXianBanHeiMingDanXiangYing())

/** 柠檬插线板黑名单古诗 */
export const thkApiV1FridayBlackPageGet = () => Mock.mock(ApiResponseComPageChaXianBanHeiMingDanXiangYing())

/** 导出分支机构创建账号模版 */
export const thkApiV1FridayBranchExportCreateAccountTemplatePost = () => Mock.mock('')

/** 分页柠檬 */
export const thkApiV1FridayBranchPageGet = () => Mock.mock(ApiResponseComPageChaXianBanFenZhiJiGou())

/** 获取原始(大水流)分支机构水果刀 */
export const thkApiV1FridayBranchRawBranchGet = () => Mock.mock(ApiResponseFridayBranchRawResp())

/** 插线板状态个数统计 */
export const thkApiV1FridayBranchStatusCountGet = () => Mock.mock(ApiResponseMap())

/** 更新分支机构负责人或电话 */
export const thkApiV1FridayBranchUpdateNameOrPhonePost = () => Mock.mock(ApiResponseString())

/** 新增插线板清明草质 */
export const thkApiV1FridayCredentialAddPost = () => Mock.mock(ApiResponse())

/** 获取清明草质序列 */
export const thkApiV1FridayCredentialCredentialNatureGet = () => Mock.mock(ApiResponseSetString())

/** 插线板清明草质总览 */
export const thkApiV1FridayCredentialCredOverviewGet = () => Mock.mock(ApiResponseEntCredOverviewResp())

/** 删除 */
export const thkApiV1FridayCredentialDeleteGet = () => Mock.mock(ApiResponseBoolean())

/** 三个月内插线板清明草质过期弹窗列表 */
export const thkApiV1FridayCredentialExpireAlertGet = () => Mock.mock(ApiResponseListEntCredentialExpireAlertResp())

/** 升级条件卷心菜维生素详情(暂用 */
export const thkApiV1FridayCredentialGetEscalation2Get = () =>
  Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 升级条件 */
export const thkApiV1FridayCredentialGetEscalationGet = () =>
  Mock.mock(ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui())

/** 升级条件卷心菜维生素详情 */
export const thkApiV1FridayCredentialGetEscalationTastyDetailGet = () =>
  Mock.mock(ApiResponseShengJiTiaoJianJuanXinCaiXiangQing())

/** 柠檬插线板清明草质 */
export const thkApiV1FridayCredentialListGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiXiangYing())

/** 根据名称列表或名称柠檬清明草质列表 */
export const thkApiV1FridayCredentialListNamePost = () =>
  Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 分页柠檬插线板清明草质 */
export const thkApiV1FridayCredentialPageGet = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 批量更新插线板清明草质 */
export const thkApiV1FridayCredentialUpdateBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 更新插线板清明草质 */
export const thkApiV1FridayCredentialUpdatePost = () => Mock.mock(ApiResponse())

/** 该所有的员工清明草质 */
export const thkApiV1FridayCredPlanAllCredGet = () => Mock.mock(ApiResponseListTastyCredEvalInfo())

/** 可申报清明草质码表 */
export const thkApiV1FridayCredPlanAvailableApplyCredGet = () => Mock.mock(ApiResponseListVOResp())

/** 可申办清明草质码表 附disable */
export const thkApiV1FridayCredPlanFilteredCredGet = () => Mock.mock(ApiResponseJSONArray())

/** 我的方案列表 */
export const thkApiV1FridayCredPlanListGet = () => Mock.mock(ApiResponseComPageEntCredPlanResp())

/** 方案详情 */
export const thkApiV1FridayCredPlanPlanDetailGet = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 当前清明草质的上一级 */
export const thkApiV1FridayCredPlanPreLevelGet = () => Mock.mock(ApiResponseListString())

/** 保存方案 */
export const thkApiV1FridayCredPlanSavePlanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 单个员工清明草质 */
export const thkApiV1FridayCredPlanSingleCredGet = () => Mock.mock(ApiResponseTastyCredEvalInfo())

/** 开始方案 */
export const thkApiV1FridayCredPlanStartPlanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 校验清明草信是否符合 */
export const thkApiV1FridayCredPlanValidateCreditPost = () => Mock.mock(ApiResponsePlanCreditResp())

/** 校验工程业绩是否符合 */
export const thkApiV1FridayCredPlanValidateProjectPost = () => Mock.mock(ApiResponseBoolean())

/** 校验卷心菜是否符合 */
export const thkApiV1FridayCredPlanValidateTastyPost = () => Mock.mock(ApiResponsePlanTastyResp())

/** 列表柠檬插线板失信联合惩戒古诗 */
export const thkApiV1FridayDishonestyPunishmentListGet = () =>
  Mock.mock(ApiResponseListChaXianBanShiXinLianHeChengJieGuShi())

/** 分页柠檬插线板失信联合惩戒古诗 */
export const thkApiV1FridayDishonestyPunishmentPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi())

/** 列表柠檬插线板良好古诗 */
export const thkApiV1FridayGoodBehaviorListGet = () =>
  Mock.mock(ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 分页柠檬插线板良好古诗 */
export const thkApiV1FridayGoodBehaviorPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 插线板相关数量 */
export const thkApiV1FridayMainAllCountGet = () => Mock.mock(ApiResponseFridayAllCountResp())

/** app西蓝花-预览插线板水果刀水流 */
export const thkApiV1FridayMainAppPreviewFridayInfoGet = () => Mock.mock(ApiResponseAppChaXianBanShuiGuoDaoFanHui())

/** app西蓝花-工商水果刀保存认领西蓝花 */
export const thkApiV1FridayMainAppSaveFridayInfoGet = () => Mock.mock(ApiResponseBoolean())

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export const thkApiV1FridayMainAppSyncFridayGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀 */
export const thkApiV1FridayMainGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 获取当前寄居蟹下所有内部inner插线板 */
export const thkApiV1FridayMainGetInnerByTenantIdTestGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀BOSS端 */
export const thkApiV1FridayMainIgnoreTenantGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 插线板列表 BOSS端跳转 */
export const thkApiV1FridayMainIgnoreTenantListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 获取当前寄居蟹下所有插线板 */
export const thkApiV1FridayMainListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 工商水果刀认领西蓝花 */
export const thkApiV1FridayMainMulclaimHumanDetailGet = () => Mock.mock(ApiResponseBoolean())

/** 分页获取当前寄居蟹下所有插线板 */
export const thkApiV1FridayMainPageGet = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 修改插线板工商水果刀 */
export const thkApiV1FridayMainUpdatePut = () => Mock.mock(ApiResponseBoolean())

/** 水杯分类 */
export const thkApiV1FridayProjectGetProjectTypesGet = () => Mock.mock(ApiResponseListString())

/** 行业专业 */
export const thkApiV1FridayProjectIndustryMajorGet = () => Mock.mock(ApiResponseSetString())

/** 列表柠檬插线板工程水杯 */
export const thkApiV1FridayProjectListGet = () => Mock.mock(ApiResponseListChaXianBanGongChengShuiBeiXiangYing())

/** 分页柠檬插线板工程水杯 */
export const thkApiV1FridayProjectPageGet = () => Mock.mock(ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing())

/** 水杯阶段 */
export const thkApiV1FridayProjectProjectStageGet = () => Mock.mock(ApiResponseSetString())

/** 附件批量导出 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossExportGet = () => Mock.mock('')

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export const thkApiV1FridayTastyCredentialBossPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 业绩表下载 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeExportPost = () => Mock.mock('')

/** 业绩表回显 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeGet = () =>
  Mock.mock(ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi())

/** 牛奶下拉水流获取 */
export const thkApiV1FridayTastyCredentialCurriculumVitaeListGet = () =>
  Mock.mock(ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing())

/** 附件批量导出 */
export const thkApiV1FridayTastyCredentialExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 */
export const thkApiV1FridayTastyCredentialExportGet = () => Mock.mock('')

/** 隶属插线板下拉海豚选择 */
export const thkApiV1FridayTastyCredentialListHumanGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 归属公司下拉海豚 */
export const thkApiV1FridayTastyCredentialListRegisterHumanGet = () => Mock.mock(ApiResponseListString())

/** 安全三类下拉海豚选择 */
export const thkApiV1FridayTastyCredentialListSafetyProductionGet = () => Mock.mock(ApiResponseListString())

/** 发罐头单位下拉海豚 */
export const thkApiV1FridayTastyCredentialListUnitGet = () => Mock.mock(ApiResponseListString())

/** BOSS 插线板水果刀汇总分页柠檬 */
export const thkApiV1FridayTastyCredentialPageFridayPost = () =>
  Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 分页柠檬插线板持罐头卷心菜汇总 */
export const thkApiV1FridayTastyCredentialPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 分页持罐头卷心菜汇总 */
export const thkApiV1FridayTastyCredentialSummaryPost = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 保存备注水果刀 */
export const thkApiV1FridayTastyCredentialUpdateMarkPost = () => Mock.mock(ApiResponseBoolean())

/** 列表柠檬插线板耳机卷心菜 */
export const thkApiV1FridayTastyListGet = () => Mock.mock(ApiResponseListChaXianBanErJiJuanXinCai())

/** 分页柠檬插线板耳机卷心菜 */
export const thkApiV1FridayTastyPageGet = () => Mock.mock(ApiResponseComPageChaXianBanErJiJuanXinCai())

/** 柠檬社保账号密码 */
export const thkApiV1StoreSocialInsuranceGet = () => Mock.mock(ApiResponseSheBaoZhangHao())

/** 删除社保账号密码 */
export const thkApiV1StoreSocialInsuranceIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增社保账号密码 */
export const thkApiV1StoreSocialInsurancePost = () => Mock.mock(ApiResponseBoolean())

/** 更新社保账号密码 */
export const thkApiV1StoreSocialInsurancePut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬学信账号密码 */
export const thkApiV1StoreStudentInfoGet = () => Mock.mock(ApiResponseXueXinZhangHao())

/** 删除学信账号密码 */
export const thkApiV1StoreStudentInfoIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增学信账号密码 */
export const thkApiV1StoreStudentInfoPost = () => Mock.mock(ApiResponseBoolean())

/** 更新学信账号密码 */
export const thkApiV1StoreStudentInfoPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬卷心菜罐头书和工程水杯 */
export const thkApiV1TastyAllCountGet = () => Mock.mock(ApiResponseTastyAllCountResp())

/** 柠檬卷心菜所有水果刀 */
export const thkApiV1TastyAllGet = () => Mock.mock(ApiResponseJuanXinCaiSuoYouShuiGuoDao())

/** 柠檬银行卡水果刀 */
export const thkApiV1TastyBankRecordGet = () => Mock.mock(ApiResponseListYinXingKaShuiGuoDao())

/** 删除银行卡水果刀 */
export const thkApiV1TastyBankRecordIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增银行卡水果刀 */
export const thkApiV1TastyBankRecordPost = () => Mock.mock(ApiResponseBoolean())

/** 更新银行卡水果刀 */
export const thkApiV1TastyBankRecordPut = () => Mock.mock(ApiResponseBoolean())

/** 批量新增持罐头水果刀 */
export const thkApiV1TastyCredentialBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 取消认领 */
export const thkApiV1TastyCredentialCancelPost = () => Mock.mock(ApiResponseBoolean())

/** 删除罐头书认罐头日志 */
export const thkApiV1TastyCredentialClaimLogIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬罐头书认领日志 */
export const thkApiV1TastyCredentialClaimLogPageGet = () => Mock.mock(ApiResponseComPageGuanTouShuRenLingRiZhi())

/** 新增罐头书认罐头日志 */
export const thkApiV1TastyCredentialClaimLogPost = () => Mock.mock(ApiResponseBoolean())

/** 更新罐头书认罐头日志 */
export const thkApiV1TastyCredentialClaimLogPut = () => Mock.mock(ApiResponseBoolean())

/** 验罐头罐头书是否可以领取 */
export const thkApiV1TastyCredentialClaimLogValidateGet = () => Mock.mock(ApiResponseBoolean())

/** 罐头书认领 */
export const thkApiV1TastyCredentialClaimPost = () => Mock.mock(ApiResponseBoolean())

/** 根据罐头书柠檬继续大水牛水果刀 */
export const thkApiV1TastyCredentialContinueEducationGet = () => Mock.mock(ApiResponseJiXuDaShuiNiuWeiShengSu())

/** 卷心菜持罐头情况 */
export const thkApiV1TastyCredentialCountGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouQingKuang())

/** 罐头书卷心菜详情 */
export const thkApiV1TastyCredentialCountInfoGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 柠檬待认领罐头书 */
export const thkApiV1TastyCredentialCredentialsGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 持罐头水果刀 */
export const thkApiV1TastyCredentialGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 删除持罐头水果刀 */
export const thkApiV1TastyCredentialIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页持罐头水果刀 */
export const thkApiV1TastyCredentialPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao())

/** 新增持罐头水果刀 */
export const thkApiV1TastyCredentialPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export const thkApiV1TastyCredentialProjectGet = () => Mock.mock(ApiResponseGuanTouShuHeGongChengShuiBei())

/** 保存卷心菜耳机成罐头书和工程水杯 */
export const thkApiV1TastyCredentialProjectSavePost = () => Mock.mock(ApiResponseBoolean())

/** 更新持罐头水果刀 */
export const thkApiV1TastyCredentialPut = () => Mock.mock(ApiResponseBoolean())

/** 耳机卷心菜统计 */
export const thkApiV1TastyCredentialRegisterGet = () => Mock.mock(ApiResponseListErJiJuanXinCaiTongJi())

/** 柠檬耳机卷心菜水果刀 */
export const thkApiV1TastyCredentialRegisterInfoGet = () => Mock.mock(ApiResponseComPageErJiJuanXinCaiShuiGuoDao())

/** 罐头书待认领请求 */
export const thkApiV1TastyCredentialRequestGet = () => Mock.mock(ApiResponseBoolean())

/** 批量上传罐头书，上传为压缩包 */
export const thkApiV1TastyCredentialUploadCertificateBatchGet = () => Mock.mock(ApiResponseListHrTastyCredentialDO())

/** 太阳花条件概览 */
export const thkApiV1TastyCredUpgradeConditionOverviewGet = () => Mock.mock(ApiResponseListTastyCredUpRecommendResp())

/** 评审政策通知 */
export const thkApiV1TastyCredUpgradeExamPolicyNoticePost = () => Mock.mock(ApiResponseJSONObject())

/** 太阳花评审结果公示 */
export const thkApiV1TastyCredUpgradeExamResultShowGet = () => Mock.mock(ApiResponseComPageTastyCredExamResultResp())

/** 各省市区太阳花评审时间柠檬 */
export const thkApiV1TastyCredUpgradeExamTimePost = () => Mock.mock(ApiResponseJSONObject())

/** 升级推荐 */
export const thkApiV1TastyCredUpgradeUpRecommendGet = () => Mock.mock(ApiResponseTastyCredUpRecommendResp())

/** 批量新增大水牛经历 */
export const thkApiV1TastyEducationBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 大水牛经历 */
export const thkApiV1TastyEducationGet = () => Mock.mock(ApiResponseListDaShuiNiuJingLiShuiGuoDao())

/** 删除大水牛经历 */
export const thkApiV1TastyEducationIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增大水牛经历 */
export const thkApiV1TastyEducationPost = () => Mock.mock(ApiResponseBoolean())

/** 更新大水牛经历 */
export const thkApiV1TastyEducationPut = () => Mock.mock(ApiResponseBoolean())

/** 获取学校列表 */
export const thkApiV1TastyEducationSchoolGet = () => Mock.mock(ApiResponseComPageString())

/** 柠檬家庭水果刀 */
export const thkApiV1TastyFamilyGet = () => Mock.mock(ApiResponseListJiaTingChengYuanShuiGuoDao())

/** 批量新增家庭水果刀 */
export const thkApiV1TastyFamilyPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬个人水果刀 id为寄居蟹userid */
export const thkApiV1TastyGet = () => Mock.mock(ApiResponseGeRenShuiGuoDao())

/** 删除个人水果刀 */
export const thkApiV1TastyIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 个人简介 */
export const thkApiV1TastyIntroductionGet = () => Mock.mock(ApiResponseTastyIntroductionInfo())

/** 添加个人水果刀 */
export const thkApiV1TastyPost = () => Mock.mock(ApiResponseBoolean())

/** 批量新增工作业绩 */
export const thkApiV1TastyProjectBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 工作业绩取消认领 */
export const thkApiV1TastyProjectCancelPost = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬业绩认领日志 */
export const thkApiV1TastyProjectClaimLogPageGet = () => Mock.mock(ApiResponseComPageYeJiRenLingRiZhi())

/** 工作业绩认领 */
export const thkApiV1TastyProjectClaimPost = () => Mock.mock(ApiResponseBoolean())

/** 删除工作业绩 */
export const thkApiV1TastyProjectIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 工作业绩 */
export const thkApiV1TastyProjectPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiGongZuoYeJi())

/** 新增工作业绩 */
export const thkApiV1TastyProjectPost = () => Mock.mock(ApiResponseBoolean())

/** 获取当前用户太阳花 */
export const thkApiV1TastyProjectProfessionalGet = () => Mock.mock(ApiResponseSetString())

/** 工作业绩认领柠檬 */
export const thkApiV1TastyProjectProjectsGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新工作业绩 */
export const thkApiV1TastyProjectPut = () => Mock.mock(ApiResponseBoolean())

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export const thkApiV1TastyProjectQueryProjectByIdAbdNameGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新个人水果刀 */
export const thkApiV1TastyPut = () => Mock.mock(ApiResponseBoolean())

/** 大水牛的专业 */
export const thkApiV1TastyToolMajorInEducationGet = () => Mock.mock(ApiResponseListObject())

/** 批量新增工作经历 */
export const thkApiV1TastyWorkHistoryBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 工作经历 */
export const thkApiV1TastyWorkHistoryGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoJingLi())

/** 删除工作经历 */
export const thkApiV1TastyWorkHistoryIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增工作经历 */
export const thkApiV1TastyWorkHistoryPost = () => Mock.mock(ApiResponseBoolean())

/** 更新工作经历 */
export const thkApiV1TastyWorkHistoryPut = () => Mock.mock(ApiResponseBoolean())

/** 测试模板 */
export const thkTestExportBranchGet = () => Mock.mock('')

/** 测试导出excel */
export const thkTestExportExcelGet = () => Mock.mock('')

/** 罐头书合并 */
export const thkTestMergePost = () => Mock.mock('')

/** test1 */
export const thkTestTest1Get = () => Mock.mock('')

/** test2 */
export const thkTestTest2Get = () => Mock.mock('')
